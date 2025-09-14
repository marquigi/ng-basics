import { Component, Input } from '@angular/core';
import { Prodotto } from '../../models/Prodotto';
import { CurrencyPipe, UpperCasePipe, NgClass } from '@angular/common';


@Component({
  selector: 'app-prodotto-card',
  imports: [UpperCasePipe, CurrencyPipe, NgClass],
  templateUrl: './prodotto-card.html',
  styleUrl: './prodotto-card.css'
})
export class ProdottoCard {
  @Input() // il genitore passa dati al figlio
  prodotto?: Prodotto; // un singolo prodotto ricevuto dal genitore
}
