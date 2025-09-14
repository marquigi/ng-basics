import { Component, Input } from '@angular/core';
import { ProdottoCard } from '../prodotto-card/prodotto-card';
import { Prodotto } from '../../models/Prodotto';
// import { JsonPipe } from '@angular/common';



@Component({
  selector: 'app-lista-prodotti',
  imports: [ProdottoCard], // JsonPipe
  templateUrl: './lista-prodotti.html',
  styleUrl: './lista-prodotti.css'
})
export class ListaProdotti {
  @Input() // il genitore passa dati al figlio
  prodotti: Prodotto[] = []; // array che riceve i prodotti dal genitore; Prodotto[] =>  array di oggetti di tipo Prodotto
}