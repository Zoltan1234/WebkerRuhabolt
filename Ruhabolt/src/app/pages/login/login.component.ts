import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required])

  password = new FormControl('', [Validators.required])

  err: string = ""
  loading: boolean = false

  ngOnInit(): void {
  }

  constructor(private router: Router, private authService: AuthService) { }

  async login() {
    
    this.loading = true
    this.authService.login(this.email.value, this.password.value).then(cred => {
      console.log(cred)
      this.router.navigateByUrl('/main')
      this.loading = false
    }).catch(err => {
      console.log(err)
      this.err = err
      this.loading = false
    })
  }
}
