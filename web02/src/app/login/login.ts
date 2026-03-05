import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  public saudacao:String = ""

  public entrar(){
    this.saudacao = "Bem-vindo ao site LV!"
  }

}
