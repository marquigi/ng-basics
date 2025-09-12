import { Component } from '@angular/core';
import { ProdottoCard } from '../prodotto-card/prodotto-card';



@Component({
  selector: 'app-lista-prodotti',
  imports: [ProdottoCard],
  templateUrl: './lista-prodotti.html',
  styleUrl: './lista-prodotti.css'
})
export class ListaProdotti {

}
