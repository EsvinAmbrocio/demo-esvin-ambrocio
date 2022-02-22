import { Component, OnInit } from '@angular/core';
import { User }from "../models/user"
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  user:User = new User;

  constructor( private userServices: UserService) { }

  ngOnInit(): void {
    this.userServices.getPerfilUser().subscribe(( response) => {
      this.user = response.data;
      console.log(this.user)
    })
  }

}
