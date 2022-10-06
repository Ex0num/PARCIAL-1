import { Component, OnInit } from '@angular/core';
import { SrvGithubService } from 'src/app/Servicios/srv-github.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  constructor(public srvGitHub:SrvGithubService) {}

  myNombreGitPublico = "ex0num";

  dataGithub:any;
  login:string = "";
  name:string = "";
  location:string = "";
  followers:number | undefined;
  following:number | undefined;
  bio:string = "";
  url:string = "";
  imagen:string = "";

  ngOnInit(): void 
  {
    this.cargarGithub();
  }

  cargarGithub()
  {
    let github = this.srvGitHub.obtenerGithub(this.myNombreGitPublico).subscribe(val => 
      {
        this.dataGithub = val;
        this.login = this.dataGithub["login"];
        this.name = this.dataGithub["name"];
        this.location = this.dataGithub["location"];
        this.followers = this.dataGithub["followers"];
        this.following = this.dataGithub["following"];
        this.bio = this.dataGithub["bio"];
        this.url = this.dataGithub["html_url"];
        this.imagen = this.dataGithub["avatar_url"];

        console.log(this.dataGithub);
        github.unsubscribe();
      });
   
      return github;
  }

}
