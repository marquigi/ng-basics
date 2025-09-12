import { Component } from '@angular/core';
import { Logo } from "../logo/logo";
import { Animale } from "../../models/Animale"; // Importo il file da me creato ( di solito lo importa da solo)
import { Prodotto } from '../../models/Prodotto';

@Component({
  selector: 'app-header',
  imports: [Logo],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  nome = "Luigi"; // type inference => stringhe
  cognome:string = "Mendoza";
  anno:number = 30; // per i numeri bisogna indicarne il tipo con :number

  animale: Animale = { nome: "Fiocco", razza: "gatto" } // Proprietà di classe che contiene un oggetto JSON

  prodotto?: Prodotto; // proprietà opzionale: può esserci oppure no, grazie al "?"
  
  bici?: Prodotto = {
    id: 1,
    nome: "Bicicletta",
    prezzo: 120,
    inOfferta: false
  };

  esempio(){
    this.prodotto = {
      id: 1,
      nome: "Bicicletta",
      prezzo: 120,
      inOfferta: false
    };

    let eta = 16;
    let patentato = false;
    
    if(eta >= 18){
      patentato = true;
    }else{
      patentato = false;
    }

    // Operatore ternario; Questo esempio rapresenta if else qua sopra
    patentato = eta >= 18 ? true : false // pantato = condizione è true altrimenti false
  }
}

// L'operatore ternario è un modo di dire in una solo riga un if o else