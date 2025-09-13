import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { ListaProdotti } from "./components/lista-prodotti/lista-prodotti";
import { Title } from "./components/title/title";
import { Prodotto } from './models/Prodotto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
   // Header, 
    Footer, 
    ListaProdotti, 
    Title],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-basics');

  testo_titolo_prodotti = "Esempio"

  prodotti_novita: Prodotto[] = [
    {
      nome:"Bici",
      desc: "Ad aria",
      prezzo: 100,
      foto: "https://picsum.photos/100/200"
    },
    {
      nome:"Friggitrice",
      desc: "Ad aria",
      prezzo: 80,
      foto: "https://picsum.photos/100/200"
    }
  ]
}