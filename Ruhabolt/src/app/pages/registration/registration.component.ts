import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/User';
import { last } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  err: string = ""
  loading: boolean = false

  registrationForm = this.createForm({
    id: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    birthDate: new Date(),
    admin: false,
  })

  passwordAgain = new FormControl()

constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder, private userService: UserService) {

}

ngOnInit(): void {
  this.addValidators()
}

createForm(model: User) {
  return this.formBuilder.group(model)
}

  addValidators(){
    this.registrationForm.get("email")?.addValidators([
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
    ])
    this.registrationForm.get("password")?.addValidators([
      Validators.minLength(6), 
      Validators.required
    ])
    this.registrationForm.get("firstName")?.addValidators(Validators.required)
    this.registrationForm.get("lastName")?.addValidators(Validators.required)
    this.registrationForm.get("birthDate")?.addValidators(Validators.required)
  }

  async registration() {
      console.log(this.registrationForm.valid)
      let email = this.registrationForm.get("email")?.value
      let password = this.registrationForm.get("password")?.value
      let firstName = this.registrationForm.get("firstName")?.value
      let lastName = this.registrationForm.get("lastName")?.value
      let birthDate = this.registrationForm.get("birthDate")?.value
      let passwordAgain = this.passwordAgain.value
      
      if (this.registrationForm.valid && password === passwordAgain ) {

        this.loading = true
        this.authService.registration(email, password)
          .then(cred => {
            console.log(cred);
            const user: User = {
              id: cred.user?.uid as string,
              email: email,
              password: password,
              firstName: firstName,
              lastName: lastName,
              birthDate: birthDate,
              admin: false,
            }
            this.userService.create(user).then(()=> {
              console.log("Sikeres regisztráció")
            }).catch(e => {
              console.log(e)
            })
            this.router.navigateByUrl('/login');
            this.loading = false;
          }).catch(err => {
            console.log(err)
            this.err = err;
            this.loading = false;
          })
      }
  }


}
