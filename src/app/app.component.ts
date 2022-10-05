import { Component } from '@angular/core';
import { Planszowka } from './planszowka';
import { PLANSZOWKI } from './planszowki';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kartkówka';

  planszowki: Planszowka[] = PLANSZOWKI;
  wybranaPlanszowka!: Planszowka;

  pokaz(planszowka: Planszowka): void{
    this.wybranaPlanszowka = planszowka
  }
}
