import { Component } from '@angular/core';
import { PersonagemService } from '../services/personagem.service';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent {
  personagem: any = null;

  constructor(private personagemService: PersonagemService) {}
  
  ngOnInit() {
    this.personagemService.personagem$.subscribe(personagem => {
      this.personagem = personagem;
    });
  }
}
