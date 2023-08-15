import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http'
import { BsModalRef } from 'ngx-bootstrap/modal';
import environment from 'environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private readonly apiURL = environment.apiURL;

  private loginSubject = new BehaviorSubject<boolean>(false);
  personagens: any[] = []

  constructor(private http: HttpClient,
              public modalRef: BsModalRef) { }
  
  hide(){
    this.modalRef.hide();
  }

  login(email: string, senha: string, modalRef: BsModalRef){
    this.http.get<any>(`${this.apiURL}usuario/login.php?email=${email}&senha=${senha}`).subscribe(data => {
      this.setLoggedIn(true);
      modalRef.hide();
    },
    error => {
      console.error('Erro ao logar:', error);
      alert('Ocorreu um erro ao logar. Por favor, tente novamente.');
    })
  }

  cadastro(formData: FormData, modalRef: BsModalRef){
    this.http.post<any>(`${this.apiURL}usuario/cadastro.php`, formData).subscribe(data => {
      this.setLoggedIn(true);
      modalRef.hide();
    },
    error => {
      console.error('Erro ao cadastrar:', error);
      alert('Ocorreu um erro ao cadastrar. Por favor, tente novamente.');
    })
  }

  listAllPersonagens(){
    return this.http.get<any[]>(`${this.apiURL}personagem/list_all.php`);
  }

  addPesonagem(formData: FormData){
    this.http.post<any>(`${this.apiURL}personagem/cadastrar_personagens.php`, formData).subscribe(data => {
      alert('Cadastro efetuado com sucesso');
    },
    error => {
      console.error('Erro ao cadastrar:', error);
      alert('Ocorreu um erro ao cadastrar um personagem. Por favor, tente novamente.');
    })
  }

  getCurtidas(){

  }

  curtir(){

  }

  listCmentarios(){

  }

  comentar(){

  }

  setLoggedIn(value: boolean) {
    this.loginSubject.next(value);
  }

  isLoggedIn$() {
    return this.loginSubject.asObservable();
  }

}
