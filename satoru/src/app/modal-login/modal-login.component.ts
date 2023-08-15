import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent {
  email: string = '';
  senha: string = '';

  constructor(public modalRef: BsModalRef,
              private httpService: RequestService) {}

  entrar() {
    this.httpService.login(this.email, this.senha, this.modalRef);
  }
}
