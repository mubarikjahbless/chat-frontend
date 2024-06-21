import { Component} from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

  credentials = {
    name: '',
    password: ''
  };

  constructor(public authSvc: AuthService) { }
}
