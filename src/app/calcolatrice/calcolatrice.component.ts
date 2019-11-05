import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcolatrice',
  templateUrl: './calcolatrice.component.html',
  styleUrls: ['./calcolatrice.component.css']
})
export class CalcolatriceComponent implements OnInit {
  espressione: string=''

  constructor() { }

  ngOnInit() {
  }

  add(numero){
    this.espressione += numero;
  }

}