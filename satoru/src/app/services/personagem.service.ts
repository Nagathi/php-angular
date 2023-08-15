import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  private personagemSource = new BehaviorSubject<any>(null);
  personagem$ = this.personagemSource.asObservable();

  constructor() { }

  atualizarPersonagem(personagem: any) {
    this.personagemSource.next(personagem);
  }
}
