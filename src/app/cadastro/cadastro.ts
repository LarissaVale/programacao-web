import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  imports: [],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  public aviso:String = "";

  public cadastrar(){
    this.aviso = "Seu cadastro foi realizado com sucesso!";
  }
}
