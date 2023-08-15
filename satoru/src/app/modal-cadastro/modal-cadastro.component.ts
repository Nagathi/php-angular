import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-modal-cadastro',
  templateUrl: './modal-cadastro.component.html',
  styleUrls: ['./modal-cadastro.component.css']
})
export class ModalCadastroComponent {
  nome: string = '';
  email: string = '';
  usuario: string = '';
  senha: string = '';
  imagem: File | null = null;

  imagemPreview!: SafeUrl;
  exibirImagem: boolean = false;

  constructor(public modalRef: BsModalRef,
              private sanitizer: DomSanitizer,
              private httpService: RequestService) {}

  onFileChange(event: any) {
    this.imagem = event.target.files[0];

    if(this.imagem){
      this.createImagePreview(this.imagem);
    }
  }

  createImagePreview(imagem: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagemPreview = this.sanitizer.bypassSecurityTrustUrl(reader.result as string);
      this.exibirImagem = true;
    };
    reader.readAsDataURL(imagem);
  }

  cadastrar() {
    
    const formData: FormData = new FormData();
    formData.append('nome', this.nome);
    formData.append('email', this.email);
    formData.append('usuario', this.usuario);
    formData.append('senha', this.senha);
    if (this.imagem) {
      formData.append('imagem', this.imagem);
    }

    this.httpService.cadastro(formData, this.modalRef);
  }
}
