import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/auth/login.service';

export class User {
  id: any;
  username: any;
  password: any;
  role: any;
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  user: User = {
    id: 0,
    username: '',
    password: '',
    role: 'user',
  };

  submitted = false;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  newUser(): void {
    const data = {
      username: this.user.username,
      password: this.user.password,
      role: this.user.role,
    };

    this.loginService.add(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
