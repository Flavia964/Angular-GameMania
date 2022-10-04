import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private UserService: UserService) { }

  ngOnInit(): void {
  }

  // Nossas variáveis e métodos
  userModel = new User()
  mensagem = ""
 
  receberDados(){
    console.log(this.userModel);

    this.UserService.logsrUsuario(this.userModel).subscribe({
      next: (response) => {// Sucesso

        console.log("Deu certo!");
        console.log(response);
        this.mensagem = "Logado com Sucesso";
      },

      error: (err) =>{//erro
        console.log("Deu ruimm");
        console.log(err);
        this.mensagem = err.error;
      },
    })
  }
}
