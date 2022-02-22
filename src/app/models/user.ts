export class User{
  descripcion:string
  foto:string;
  online: boolean;
  publicaciones: number;
  trabajos: number;

  constructor(){
    this.descripcion = "";
    this.foto = "";
    this.online = false;
    this.publicaciones = 0;
    this.trabajos = 0;
  }
};
