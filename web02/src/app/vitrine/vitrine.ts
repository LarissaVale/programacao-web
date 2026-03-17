import { Component } from '@angular/core';
import { Produto } from '../model/produto'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vitrine',
  imports: [CommonModule],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.css',
})
export class Vitrine {
  mensagem: string ="";
  lista: Produto[] = [
  {
    "codigo": 1,
    "nome": "Furadeira Elétrica 650W",
    "descritivo": "Furadeira elétrica com controle de velocidade, ideal para madeira, metal e alvenaria.",
    "valor": 249.9,
    "promo": 199.9,
    "quantidade": 15
  },
  {
    "codigo": 2,
    "nome": "Parafusadeira a Bateria 12V",
    "descritivo": "Parafusadeira compacta com bateria recarregável e luz LED para trabalhos domésticos.",
    "valor": 189.9,
    "promo": 159.9,
    "quantidade": 20
  },
  {
    "codigo": 3,
    "nome": "Jogo de Chaves de Fenda 6 Peças",
    "descritivo": "Conjunto de chaves de fenda e philips com cabo ergonômico e pontas magnéticas.",
    "valor": 59.9,
    "promo": 49.9,
    "quantidade": 30
  },
  {
    "codigo": 4,
    "nome": "Martelo Unha 27mm",
    "descritivo": "Martelo de aço com cabo emborrachado, ideal para carpintaria e reparos gerais.",
    "valor": 45.5,
    "promo": 39.9,
    "quantidade": 25
  },
  {
    "codigo": 5,
    "nome": "Serra Tico-Tico 500W",
    "descritivo": "Serra elétrica para cortes curvos e retos em madeira, plástico e metal.",
    "valor": 299.9,
    "promo": 259.9,
    "quantidade": 10
  },
  {
    "codigo": 6,
    "nome": "Alicate Universal 8 Polegadas",
    "descritivo": "Alicate multifuncional com cabo isolado, ideal para corte e aperto de fios.",
    "valor": 39.9,
    "promo": 34.9,
    "quantidade": 40
  },
  {
    "codigo": 7,
    "nome": "Trena 5 Metros",
    "descritivo": "Trena retrátil com trava automática e fita metálica resistente.",
    "valor": 24.9,
    "promo": 19.9,
    "quantidade": 50
  },
  {
    "codigo": 8,
    "nome": "Esmerilhadeira Angular 750W",
    "descritivo": "Ferramenta ideal para corte e desbaste em metal e concreto.",
    "valor": 329.9,
    "promo": 289.9,
    "quantidade": 12
  },
  {
    "codigo": 9,
    "nome": "Chave Inglesa Ajustável 10\"",
    "descritivo": "Chave ajustável em aço cromado para diferentes tamanhos de porcas e parafusos.",
    "valor": 49.9,
    "promo": 42.9,
    "quantidade": 28
  },
  {
    "codigo": 10,
    "nome": "Nível de Alumínio 40cm",
    "descritivo": "Nível com três bolhas para medições horizontais, verticais e diagonais.",
    "valor": 34.9,
    "promo": 29.9,
    "quantidade": 18
  }
];
}
