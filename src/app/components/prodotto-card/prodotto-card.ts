import { Component, Input, output } from '@angular/core';
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

  prodottoSelezionato = output<Prodotto>();
  // Crea un evento di output che il figlio può inviare al genitore
  // <Prodotto> indica che l'evento trasporterà un oggetto di tipo Prodotto

  // Funzione che viene richiamata (es. da un click nel template)
  scatenaEvento() {
    this.prodottoSelezionato.emit(this.prodotto!);
    // Emette (Invia) l'evento verso il genitore passando il prodotto come dato
    // "!" dice a TypeScript che prodotto non è null/undefined

    console.log(this.prodotto);
    // Mostra il prodotto nella console (utile per debug)
  }

  // Funzione
  saluta() {
    alert("Ciao!");
  }
}
