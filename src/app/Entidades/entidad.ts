export class Entidad 
{

    nombre:string = "";
    dni:number | undefined;
    edad:number | undefined;
    capacidadDeTransporte:number | undefined;
    pais:any;
    unidadPropia:boolean = true;

    constructor(nombreRecibido:string, dniRecibido:number, edadRecibida:number, capacidadDeTransporteRecibida:number, paisRecibido:any, unidadPropiaRecibida:boolean)
    {
        this.nombre = nombreRecibido;
        this.dni = dniRecibido;
        this.edad = edadRecibida;
        this.capacidadDeTransporte = capacidadDeTransporteRecibida;
        this.pais = paisRecibido;
        this.unidadPropia = unidadPropiaRecibida;
    }

}
