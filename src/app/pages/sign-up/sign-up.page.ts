import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage {

  credentials: {
    name?: string,
    password?: string,
    confirmPassword?: string
  } = {};

  constructor(public authSvc: AuthService) { }
}
