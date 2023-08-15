import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-add-personagem',
  templateUrl: './add-personagem.component.html',
  styleUrls: ['./add-personagem.component.css']
})
export class AddPersonagemComponent {
  
  imagem: File | null = null;
  nome: string = '';
  anime: string = '';
  descricao: string = '';

  imagemPreview!: SafeUrl;
  exibirImagem: boolean = false;

  constructor(private sanitizer: DomSanitizer,
              private httpService: RequestService){}

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

  submitForm() {
    const formData: FormData = new FormData();
    formData.append('nome', this.nome);
    formData.append('anime', this.anime);
    formData.append('descricao', this.descricao);
    if (this.imagem) {
      formData.append('imagem', this.imagem);
    }

    this.httpService.addPesonagem(formData);
  }
}
