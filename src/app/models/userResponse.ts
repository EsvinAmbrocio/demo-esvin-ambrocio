import {User} from "./user"

export class UserResponse{
  data:User;
  fecha: string;
  mensaje:string;
  success:boolean;

  constructor(){
    this.data = new User();
    this.fecha = "";
    this.mensaje = "";
    this.success = false;
  }
}
