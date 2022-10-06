import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  mailIngresadoLogin:string = "";
  passwordIngresadoLogin:string = "";

  errorShowed:any = "Algo salio mal";

  constructor(private router: Router, private route: ActivatedRoute) 
  {
    
  }

  public loginAuthFirebase()
  {
    const auth = getAuth();
    
    signInWithEmailAndPassword(auth, this.mailIngresadoLogin, this.passwordIngresadoLogin).then(async (userCredential) =>
     {

      console.log("El inicio de sesión fue satisfactorio. Bienvenido/a.");
      // this.mostrarSatisfaccion("El inicio de sesión fue satisfactorio. Bienvenido/a.");

        // Signed in
        const userLoged = userCredential.user;

        //this.limpiarControles();
        this.router.navigate(["/home"],);
      })
      .catch((error) => 
      {
          const errorCode = error.code;
          const errorMessage = error.message;

          this.mostrarError("MSG: " + errorMessage + " CODE: " + errorCode);
            
          switch (errorCode) 
          {
            case "auth/invalid-email":
            {
              this.mostrarError("El mail ingresado es invalido.");
              break;
            }
            case "auth/internal-error":
            {
              this.mostrarError("Hubo un error interno de procesamiento.");
              break;
            }
            case "auth/wrong-password":
            {
              this.mostrarError("La contraseña ingresada es incorrecta.");
              break;
            }
            case "auth/user-not-found":
            {
              this.mostrarError("No se pudo encontrar al usuario.");
              break;
            }
            case "auth/network-request-failed":
            {
              this.mostrarError("Hubo un problema de conexión. Chequea tu red.");
              break;
            }
            default:
            {
              this.mostrarError("Ocurrió un error inesperado. Por favor comunicate con el soporte.");
              break;
            }
          }
      });
  }

  private mostrarError(errorRecibido:string)
  {
    let lblerrorMessage = document.getElementById("txtError");
    lblerrorMessage?.removeAttribute("hidden");

    this.errorShowed = errorRecibido;
  }
}
