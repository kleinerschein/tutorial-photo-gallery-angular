import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { BarcodeScanner } from "@capacitor-community/barcode-scanner";

@Component({
  selector: "app-tab2",
  templateUrl: "./tab2.page.html",
  styleUrls: ["./tab2.page.scss"],
})
export class Tab2Page implements OnDestroy {
  constructor(private router: Router) {}

  resultado = "";

  async lerQRCode() {
    try {
      const status = await BarcodeScanner.checkPermission({
        force: true,
      });

      if (!status.granted) {
        return;
      }

      BarcodeScanner.hideBackground();
      document.body.classList.add("scanner-active");

      const result = await BarcodeScanner.startScan();

      if (result?.hasContent) {
        this.resultado = result.content ?? "";
        console.log("QR Code:", this.resultado);
        const CodPro = this.resultado.split("/")[0] ?? this.resultado;
        const CodDer = this.resultado.split("/")[1];
        this.router.navigate(["/produto"], {
          state: {
            produto: {
              CodPro: CodPro
            },
          },
        });
      }
    } catch (e) {
      console.error("Erro ao ler QR Code:", e);
    } finally {
      BarcodeScanner.stopScan();
      document.body.classList.remove("scanner-active");
    }
  }

  ngOnDestroy() {
    BarcodeScanner.stopScan();
    document.body.classList.remove("scanner-active");
  }
}
