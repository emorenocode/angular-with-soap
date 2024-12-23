import { Component } from '@angular/core';
import { StockquoteComponent } from './components/stockquote/stockquote.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StockquoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
