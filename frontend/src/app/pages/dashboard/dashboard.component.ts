import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  balance: any;

  type = 'grupo';
  number = '';
  amount = 0;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadBalance();
  }

  loadBalance() {
    this.api.getBalance().subscribe(res => this.balance = res);
  }

  bet() {
    this.api.createBet({
      type: this.type,
      number: this.number,
      amount: this.amount
    }).subscribe(() => {
      alert('Aposta realizada!');
      this.loadBalance();
    });
  }

  draw() {
    this.api.draw().subscribe(() => {
      alert('Sorteio realizado!');
    });
  }

    bichos = [
  { nome: 'Avestruz', grupo: 1, img: 'bichos/avestruz.png' },
  { nome: 'Águia', grupo: 2, img: 'bichos/aguia.png' },
  { nome: 'Burro', grupo: 3, img: 'bichos/burro.png' },
  { nome: 'Borboleta', grupo: 4, img: 'bichos/borboleta.png' },
  { nome: 'Cachorro', grupo: 5, img: 'bichos/cachorro.png' },
  { nome: 'Cabra', grupo: 6, img: 'bichos/cabra.png' },
  { nome: 'Carneiro', grupo: 7, img: 'bichos/carneiro.png' },
  { nome: 'Camelo', grupo: 8, img: 'bichos/camelo.png' },
  { nome: 'Cobra', grupo: 9, img: 'bichos/cobra.png' },
  { nome: 'Coelho', grupo: 10, img: 'bichos/coelho.png' },
  { nome: 'Cavalo', grupo: 11, img: 'bichos/cavalo.png' },
  { nome: 'Elefante', grupo: 12, img: 'bichos/elefante.png' },
  { nome: 'Galo', grupo: 13, img: 'bichos/galo.png' },
  { nome: 'Gato', grupo: 14, img: 'bichos/gato.png' },
  { nome: 'Jacaré', grupo: 15, img: 'bichos/jacare.png' },
  { nome: 'Leão', grupo: 16, img: 'bichos/leao.png' },
  { nome: 'Macaco', grupo: 17, img: 'bichos/macaco.png' },
  { nome: 'Porco', grupo: 18, img: 'bichos/porco.png' },
  { nome: 'Pavão', grupo: 19, img: 'bichos/pavao.png' },
  { nome: 'Peru', grupo: 20, img: 'bichos/peru.png' },
  { nome: 'Touro', grupo: 21, img: 'bichos/touro.png' },
  { nome: 'Tigre', grupo: 22, img: 'bichos/tigre.png' },
  { nome: 'Urso', grupo: 23, img: 'bichos/urso.png' },
  { nome: 'Veado', grupo: 24, img: 'bichos/veado.png' },
  { nome: 'Vaca', grupo: 25, img: 'bichos/vaca.png' }
];

  bichoSelecionado: any;

}