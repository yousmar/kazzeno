import { Injectable } from '@angular/core';

const REGISTRATION_KEY = 'register';


@Injectable({
providedIn: 'root'
})
export class TokenStorageService {
constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  
  public saveRegistration(){
    window.sessionStorage.removeItem(REGISTRATION_KEY);
    window.sessionStorage.setItem(REGISTRATION_KEY, 'true');
  }

  public getRegistration(){
    return sessionStorage.getItem(REGISTRATION_KEY);
  }


}
