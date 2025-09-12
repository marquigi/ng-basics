import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { ListaProdotti } from "./components/lista-prodotti/lista-prodotti";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ListaProdotti],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-basics');
}
