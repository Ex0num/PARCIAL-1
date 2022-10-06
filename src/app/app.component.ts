import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SrvFirebaseService } from './Servicios/srv-firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  constructor(public router:Router, public srvFirebase:SrvFirebaseService)
  {}

  title = 'p1-v1';

  logOut()
  {
    this.srvFirebase.logOut();
  }

  navigateLogin()
  {
    this.router.navigate(["/login"],);
  }

}
