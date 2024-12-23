import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StockquoteService {
  http = inject(HttpClient);

  getStockQuoteFromSoap(ticker: string) {
    const requestBody = `
      <Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                  xmlns:ns="http://example.com/stockquote.xsd">
        <Header/>
        <Body>
            <ns:TradePriceRequest>
              <tickerSymbol>${ticker}</tickerSymbol>
            </ns:TradePriceRequest>
        </Body>
      </Envelope>
    `;

    const headers = new HttpHeaders({
      'Content-Type': 'text/xml;charset=UTF-8',
      SOAPAction: 'http://example.com/GetLastTradePrice',
    });

    return this.http.post('http://localhost:3000/stockquote', requestBody, {
      responseType: 'text',
      headers,
    });
  }
}
