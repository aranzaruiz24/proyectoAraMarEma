import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  suscriptores:any = "";
  nombre:string = "";
  email:string = "";
  sexo:string = "";
  fecha:string = "";

  constructor() { 
    
  }

  ngOnInit(): void {
    this.suscriptores=localStorage.getItem("personas");
    this.suscriptores=JSON.parse(this.suscriptores);
          
    if(this.suscriptores==null) this.suscriptores=[];
  }
  guardar(){
    var suscriptor = JSON.stringify(
      { nombre:this.nombre, 
        email:this.email,  
        sexo:this.sexo, 
        fecha:this.fecha  });
  
        this.suscriptores.push(suscriptor);
      localStorage.setItem("personas",JSON.stringify(this.suscriptores));
      alert(this.nombre+"suscriptor añadido exitosamente");
  }
}

