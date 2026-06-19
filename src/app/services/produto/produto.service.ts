import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Produto {
  CodPro: string;
  CodOri: string;
  CodFam: string;
  NomPro: string;
  AltPro: string;
  LarPro: string;
  ComPro: string;
  PesPro: string;
  ImgPro: string;
  ImgThb: string;
  UniMed: string;
  CodDer: string;
  DesDer: string;
  PreBas: string;
  PrePro: string;
  QtdEst: string;
  PerIPI: string;
}

@Injectable({
  providedIn: "root",
})
export class ProdutoService {
  private apiUrl = "https://shop.kleiner.ind.br/admin_kleiner/mobile/api";

  constructor(private http: HttpClient) {}

  buscar(codigo: string): Observable<Produto[]> {
    const ENDPOINT = "/produto/lista_produto.php";
    const formData = new FormData();

    if (!codigo) {
      codigo = "MSA";
    }

    formData.append("produto", codigo);
    formData.append("SQLCatPro", "FAB");
    formData.append("CodTab", "24A");

    return this.http.post<Produto[]>(this.apiUrl + ENDPOINT, formData);
  }

  detalhes(produto: Produto): Observable<Produto> {
    const ENDPOINT = "/produto/produto_derivacao.php";
    const formData = new FormData();

    formData.append("CodPro", produto.CodPro);
    formData.append("CodDer", "");
    formData.append("CodTab", "24A");
    return this.http.post<Produto>(this.apiUrl + ENDPOINT, formData);
  }
}
