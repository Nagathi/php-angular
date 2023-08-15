import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeedComponent } from './feed/feed.component';
import { AddPersonagemComponent } from './add-personagem/add-personagem.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { ModalCadastroComponent } from './modal-cadastro/modal-cadastro.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { PersonagemComponent } from './personagem/personagem.component';

const routes: Routes = [
  { path: '', component: FeedComponent },
  { path: 'personagem/:id', component: PersonagemComponent},
  { path: 'addpersonagem', component: AddPersonagemComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedComponent,
    AddPersonagemComponent,
    ModalLoginComponent,
    ModalCadastroComponent,
    PersonagemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
