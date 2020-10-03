import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  user: User = {
    userName: '',
    confirmPassWord: '',
    email: '',
    password: ''
  };
  constructor() { }

  ngOnInit(): void {
  }
}
