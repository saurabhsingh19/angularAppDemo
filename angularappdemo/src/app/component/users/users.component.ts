import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[]
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
        }
      },
      {
        firstName :'Mexwall',
        lastName : 'JP',
        age : 35,
        address: {
           street : '50 Girl At the door',
           city : 'Boston',
           state : 'MA'
        }
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
      }
    })
  }
  addUSer(user:User){
    this.users.push(user);
  }
}
