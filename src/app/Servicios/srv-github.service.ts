import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SrvGithubService {

  constructor(private http: HttpClient) {}

  obtenerGithub(nombrePublicoGitHub:string)
  {
    return this.http.get("https://api.github.com/users/" + nombrePublicoGitHub);
  }
}
