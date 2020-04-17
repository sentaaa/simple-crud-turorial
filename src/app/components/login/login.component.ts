import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public username: string = "";
  public password: string = "";
  public formInvalid: boolean = false;
  public usernameOrPasswordWrong: boolean = false;
  constructor(private authenticationService: AuthenticationService, private router: Router) { }
  public login(): void {
    if (this.username && this.password) {
      const loginsuccessful: boolean = this.authenticationService.login(this.username, this.password);
      if (loginsuccessful) {
        this.usernameOrPasswordWrong = false;
        this.router.navigate(["/home"])
      } else { this.usernameOrPasswordWrong = true; }

    } else { this.formInvalid = true; }

  }


}
