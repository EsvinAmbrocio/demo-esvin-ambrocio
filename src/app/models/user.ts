export class User{
  nombre:string
  descripcion:string
  foto:string;
  online: boolean;
  publicaciones: number;
  trabajos: number;

  constructor(){
    this.nombre = ""
    this.descripcion = "";
    this.foto = "";
    this.online = false;
    this.publicaciones = 0;
    this.trabajos = 0;
  }
};
