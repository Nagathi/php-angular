import { Component } from '@angular/core';
import { RequestService } from '../services/request.service';
import { Router } from '@angular/router';
import { PersonagemService } from '../services/personagem.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  personagens: any[] = []

  constructor(private httpService: RequestService,
              private personagemService: PersonagemService,
              private router: Router){}

  ngOnInit(){
    this.httpService.listAllPersonagens().subscribe(
      data => {
        this.personagens = data;
      },
      error => {
        console.error('Erro ao carregar o feed:', error);
        alert('Ocorreu um erro ao carregar o Feed. Por favor, atualize a página.');
        this.personagens = [];
      }
    );
  }

  goToPersonagem(id: any){
    for(let i= 0; i < this.personagens.length; i++){
      if(this.personagens[i].id === id){
        this.personagemService.atualizarPersonagem(this.personagens[i]);
        this.router.navigate(['/personagem', id]);
      }
    }
  }
}
