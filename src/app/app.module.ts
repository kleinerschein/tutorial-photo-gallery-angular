import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { AndroidPermissions } from "@awesome-cordova-plugins/android-permissions/ngx";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import {
  storefrontOutline,
  mailOutline,
  lockClosedOutline,
} from "ionicons/icons";

import { addIcons } from "ionicons";

addIcons({
  "storefront-outline": storefrontOutline,
  "mail-outline": mailOutline,
  "lock-closed-outline": lockClosedOutline,
});

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AndroidPermissions,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
