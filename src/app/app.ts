import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { ListaProdotti } from "./components/lista-prodotti/lista-prodotti";
import { Title } from "./components/title/title";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ListaProdotti, Title],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-basics');
}
