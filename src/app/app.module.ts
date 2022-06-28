import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardsListComponent } from './pages/home/cards-list/cards-list.component';
import { CardComponent } from './pages/home/card/card.component';
import { PokemonComponent } from './pages/pokemon/pokemon/pokemon.component';
import { InfoPokemonComponent } from './pages/pokemon/info-pokemon/info-pokemon.component';
import { InfoBarsDivComponent } from './pages/pokemon/info-bars-div/info-bars-div.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsListComponent,
    CardComponent,
    PokemonComponent,
    InfoPokemonComponent,
    InfoBarsDivComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
