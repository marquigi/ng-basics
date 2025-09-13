import { Component, Input } from '@angular/core';
import { Prodotto } from '../../models/Prodotto';

@Component({
  selector: 'app-prodotto-card',
  imports: [],
  templateUrl: './prodotto-card.html',
  styleUrl: './prodotto-card.css'
})
export class ProdottoCard {
  @Input() // il genitore passa dati al figlio
  prodotto?: Prodotto; // un singolo prodotto ricevuto dal genitore
}
