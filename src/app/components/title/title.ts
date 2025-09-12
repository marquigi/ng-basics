import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
  styleUrl: './title.css'
})
export class Title {
  @Input()
  testo:string = "";
}

// I decoratori aggiungono info/comportamenti extra a classi, proprietà o metodi (es. @Component, @Input); va messo all'inizio per dire ad Angular come usare quella classe o proprietà