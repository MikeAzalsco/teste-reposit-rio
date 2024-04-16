import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-criar-lista',
  templateUrl: './criar-lista.page.html',
  styleUrls: ['./criar-lista.page.scss'],
})
export class CriarLista implements OnInit {

  listaDeCompra: { nome: string, valor: number, quantidade: number }[] = [];
    itemAComprar = "";
    valorDoItem : number = 0;
    quantidadeDesejada : number = 0;

    constructor(public alert: AlertController) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

    adicionarItem() {
      if (this.itemAComprar.length > 0 && this.valorDoItem && this.quantidadeDesejada) {
        let item = {
          nome: this.itemAComprar,
          valor: this.valorDoItem,
          quantidade: this.quantidadeDesejada
        };
        this.listaDeCompra.push(item);
        this.itemAComprar = "";
        this.valorDoItem = 0;
        this.quantidadeDesejada = 0;
      }
    }

    apagarItem(index:number) {
      this.listaDeCompra.splice(index, 1);
    }

    async editarItem(index:number){
      let meuAlert = await this.alert.create({
          header: 'Editar Item',
          message: 'Insira novo nome',
          inputs: [ { name: 'editarNome', placeholder: 'Item..' },
          { name: 'editarValor', placeholder: 'Valor..' },
          { name: 'editarQuantidade', placeholder: 'Quantidade..' }
           ],
          buttons: [ { text: 'Cancelar', role: 'cancel'},
                    { text: 'Confirmar', handler: data => {
                        this.listaDeCompra[index] = data.editarNome;
                    } }
                  ]
      });
      await meuAlert.present();
    }

  }
