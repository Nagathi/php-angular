import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalCadastroComponent } from '../modal-cadastro/modal-cadastro.component';
import { ModalLoginComponent } from '../modal-login/modal-login.component';
import { RequestService } from '../services/request.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  login: boolean = false;

  constructor(private modalService: BsModalService,
              private bsModalRef: BsModalRef,
              private httpService: RequestService) {
      this.httpService.isLoggedIn$().subscribe(
        (login) => {
          this.login = login;
        }
      );
    }

  abrirModalCadastro() {
    this.bsModalRef = this.modalService.show(ModalCadastroComponent);
  }

  abrirModalLogin() {
    this.bsModalRef = this.modalService.show(ModalLoginComponent);
  }
}
