import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  suscriptores:any = "";  
  usuarios:user[]=[];
  usuario:user={
    nombre : "",
    email:"",
    sexo:"",
    fecha: ""
  };

  constructor() { }

  ngOnInit(): void {
    this.suscriptores=localStorage.getItem("personas");
    this.suscriptores=JSON.parse(this.suscriptores);
    console.log(this.suscriptores);
    for (var i in this.suscriptores) {
      this.usuario= JSON.parse(this.suscriptores[i]);
      console.log(this.usuario);
      this.usuarios.push(this.usuario);
      console.log(this.usuarios)
    }
  }

}

interface user {
  nombre:string,
  email:string
  sexo:string,
  fecha:string
}
