import { Component } from '@angular/core';
import { User } from './user';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator, passValidator, passFieldEmpty } from './shared/user-name.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private formBuider : FormBuilder) {}

  get userName () {
    return this.RegistrationForm.get('userName');
  }

  get email () {
    return this.RegistrationForm.get('email');
  }

  get password () {
    return this.RegistrationForm.get('password');
  }

  RegistrationForm = this.formBuider.group({
    userName : ['', [Validators.required , Validators.minLength(3), forbiddenNameValidator]]  , 
    email : ['' , [Validators.required , Validators.email]],
    password:['' , [Validators.required, passValidator , passFieldEmpty]]  , 
    confirmPassword : [''] ,
    address : this.formBuider.group({
      upozila : ['bagatipara'] ,
      district : [''],
      division:['']
    })
  })


  // RegistrationForm = new FormGroup ({
  //   userName : new FormControl('') , 
  //   password : new FormControl(''), 
  //   confirmPassword : new FormControl('') , 
  //   address : new FormGroup({
  //     upozila : new FormControl('Bagatipara') , 
  //     district : new FormControl('Natore') , 
  //     division : new FormControl('')
  //   })
  // });
  public loader;
  loadApiData() {
    console.log('loading...');
    this.loader = 'loading ...'
    setTimeout(()=>{
      this.RegistrationForm.patchValue({
        userName:'shuvo' , 
        password : '123',
        confirmPassword:'123'
      }); 
      console.log('loaded');
      this.loader = 'loaded';
    }, 2000)
  }
}
