import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-imagenes',
  templateUrl: './lista-imagenes.component.html',
  styleUrls: ['./lista-imagenes.component.css']
})
export class ListaImagenesComponent implements OnInit {
  imagenes = [
    {
      titulo: 'Arcangel',
      descripcion: 'Los arcangeles son los que estan mas cerca de Dios',
      url: 'https://dojiw2m9tvv09.cloudfront.net/21066/1/article/6/rafael14546.png'
    },
    {
      titulo: 'Miguel, Gabriel y Rafael, Arcángeles',
      descripcion: 'Miguel Ángel, La Creación de Adán, 1511',
      url: 'https://www.vaticannews.va/content/dam/vaticannews/multimedia/2019/09/28/ArcangeliAEM.jpg/_jcr_content/renditions/cq5dam.thumbnail.cropped.750.422.jpeg'
    },
    
  ];

  ngOnInit(): void {
  }
}
