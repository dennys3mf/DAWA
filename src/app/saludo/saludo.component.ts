import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})

export class SaludoComponent implements OnInit {
  titulo: String = '¡Bienvenido a Angular!';
  mensaje: String = 'Este es u  componente de saludo creado enn Angular.'

  constructor() {

  }

  ngOnInit(): void {
    
  }
}