import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-service-area',
  templateUrl: './service-area.component.html',
  styleUrls: ['./service-area.component.scss']
})
export class ServiceAreaComponent implements OnInit {
  emailFormControl: FormControl = new FormControl(null, [Validators.required, Validators.pattern('^[A-Za-z]+[A-Za-z0-9._]+[@][A-Za-z]+[.]{1}[A-Za-z]{2,5}$')]);

  message='';

  constructor() { }

  ngOnInit() {
    
  }

  register(){
    console.log('hello');
      if(this.emailFormControl.invalid){
        this.message = 'Veuillez saisir une adresse mail valide';
      }else{
        this.message = 'Merci pour votre inscription'
      }
  }

}
