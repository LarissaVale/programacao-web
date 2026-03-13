import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  public mensagem:String = "";
  public cliente: Cliente = new Cliente();

  public cadastrar(){
    let json = JSON.stringify(this.cliente);
    localStorage.setItem("clienteCadastro", json)
    this.mensagem = "Seu cadastro foi realizado com sucesso!";
  }
}
