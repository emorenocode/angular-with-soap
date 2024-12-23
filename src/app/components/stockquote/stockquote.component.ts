import { Component, inject, OnInit } from '@angular/core';
import { StockquoteService } from '../../services/stockquote.service';
import { parseString } from 'xml2js';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-stockquote',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './stockquote.component.html',
  styleUrl: './stockquote.component.css',
})
export class StockquoteComponent implements OnInit {
  price: string | null = null;
  stockQuoteService = inject(StockquoteService);
  jsonParsed: any;

  constructor() {}

  ngOnInit(): void {
    this.getStockQuote('AAPL');
  }

  getStockQuote(ticker: string) {
    this.stockQuoteService.getStockQuoteFromSoap(ticker).subscribe({
      next: (response) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response, 'text/xml');
        const priceNode = xmlDoc.getElementsByTagName('price')[0];
        this.price = priceNode?.textContent || 'No disponible';

        //Parse XML to JSON
        parseString(response, (err, result) => {
          if (err) {
            console.error('Error al parsear el XML:', err);
            return;
          }
          this.jsonParsed = result;
          console.log('JSON:', this.jsonParsed);
        });
      },
      error: (err) => {
        console.error('Error al consumir el servicio SOAP:', err);
        this.price = 'Error al obtener el precio';
      },
    });
  }
}
