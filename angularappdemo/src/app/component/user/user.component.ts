import { Component, OnInit, state } from '@angular/core';
import {User} from '../../models/User'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User;
  constructor() {
    this.user = {
      firstName :'John',
      lastName : 'Smith',
      age : 25,
      address: {
         street : '50 Girl At the door',
         city : 'Boston',
         state : 'MA'
      }
    }
   }

  ngOnInit() {
  }

}
