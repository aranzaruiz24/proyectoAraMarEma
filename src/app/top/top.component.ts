import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
    heroes:any[] = [
      {
        nombre:"1. Spider-Man: Entre los Muertos",
        src:"assets/imagenes/img/comic1.jpg"
      },{
        nombre:"2. Lobezno: Origen",
        src:"assets/imagenes/img/comic2.jpg"
      },{
        nombre:"3. El Hombre sin Miedo",
        src:"assets/imagenes/img/comic3.jpg"
      },{
        nombre:"4. Doctor Extraño y Doctor Muerte: Triunfo y Tormento",
        src:"assets/imagenes/img/comic4.jpg"
      },{
        nombre:"5. Inhumanos: Marvel Knights",
        src:"assets/imagenes/img/comic5.jpg"
      }
    
];
heroes2:any[] = [
  {
    nombre:"1. JLA: La Nueva Frontera",
    src:"assets/imagenes/img/comic6.jpg"
  },{
    nombre:"2. Harleen",
    src:"assets/imagenes/img/comic7.jpg"
  },{
    nombre:"3. Línea Tierra Uno",
    src:"assets/imagenes/img/comic8.jpg"
  },{
    nombre:"4. Superman vs. Muhammad Alí",
    src:"assets/imagenes/img/comic9.jpg"
  },{
    nombre:"Joker Legion Doom",
    src:"assets/imagenes/img/comic10.jpg"
  }

];
  constructor() { }

  ngOnInit(): void {
  }

}
