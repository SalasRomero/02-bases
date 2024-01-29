import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

import { AppComponent } from "./app.component";
import { CounterModule } from "./counter/components/counter.module";
import { HeroModule } from "./heroes/hero.module";
import { DbzModule } from "./dbz/dbz.module";

@NgModule({
  declarations:[
    AppComponent
  ],
  imports:[
    CommonModule,
    BrowserModule,
    CounterModule,
    HeroModule,
    DbzModule
  ],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule {}
