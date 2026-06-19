import { Component, OnInit } from '@angular/core';
import { Produto, ProdutoService } from '../services/produto/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss']
})
export class ProdutoPage implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  produto!: Produto;

  ngOnInit() {
    this.produto = history.state.produto;

    console.log("Produto recebido:", this.produto); 

    this.produtoService.detalhes(this.produto).subscribe({
      next: (res) => {
        this.produto = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  get preco(): number {
    return Number(this.produto.PreBas);
  }

}