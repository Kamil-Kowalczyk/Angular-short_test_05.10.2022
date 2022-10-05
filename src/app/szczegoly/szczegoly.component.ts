import { Component, OnInit, Input } from '@angular/core';
import { Planszowka } from '../planszowka';

@Component({
  selector: 'app-szczegoly',
  templateUrl: './szczegoly.component.html',
  styleUrls: ['./szczegoly.component.css']
})
export class SzczegolyComponent implements OnInit {

  constructor() { }

  @Input() planszowka!: Planszowka;

  zwieksz(): void{
    this.planszowka.liczbaPartii += 1;
  }

  ngOnInit(): void {
  }

}
