import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  valor: number = 0;

  constructor() {

  }

  ngOnInit(): void {
    
  }

  incrementar(): void {
    this.valor++;
  }

  disminuir(): void {
    this.valor--;
  }
}
