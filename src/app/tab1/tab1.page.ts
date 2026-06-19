import { OnInit, Component } from "@angular/core";
import { Produto, ProdutoService } from "../services/produto/produto.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit {
  codigo = "BCE";
  carregando = false;
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService, private router: Router) {}

  ngOnInit(): void {
    this.buscar();
  }

  buscar() {
    if (!this.codigo.trim()) {
      return;
    }

    this.produtos = [];
    this.carregando = true;

    this.produtoService.buscar(this.codigo).subscribe({
      next: (res) => {
        this.produtos = res;
        this.carregando = false;
      },
      error: (err) => {
        console.error(err);
        this.carregando = false;
      },
    });
  }

  abrirProduto(produto: Produto) {
    this.router.navigate(["/produto"], {
      state: {
        produto,
      },
    });
  }
}
