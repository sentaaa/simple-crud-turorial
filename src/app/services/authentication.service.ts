import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  private isLoggedIn: boolean= false;
  public login(username:string, password: string): boolean{
if(username=="test" && password =="cool"){
  this.isLoggedIn=true;return false


}else {this.isLoggedIn=false;return false}

  }
  public get loggedIn() {return this.isLoggedIn;}
}
