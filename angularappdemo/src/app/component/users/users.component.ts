import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[]
  enableAdd :boolean = true
  constructor() { }

  ngOnInit() {
    this.users= [
      {
        firstName :'John',
        lastName : 'Smith',
        age : 25,
        address: {
           street : '50 Girl At the door',
           city : 'Boston',
           state : 'MA'
        },
        image:"http://lorempixel.com/600/600/people/3"
      },
      {
        firstName :'Mexwall',
        lastName : 'JP',
        age : 35,
        address: {
           street : '50 Girl At the door',
           city : 'Boston',
           state : 'MA'
        },
        image:"http://lorempixel.com/600/600/people/2"
      }
    ];
    this.addUSer({
      firstName :'Martin',
      lastName : 'JP',
      age : 35,
      address: {
         street : '50 Girl At the door',
         city : 'Boston',
         state : 'MA'
      },
      image:"http://lorempixel.com/600/600/people/1"
    })
  }
  addUSer(user:User){
    this.users.push(user);
  }
}
