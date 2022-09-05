import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  error: string = '';
  constructor(private _authservic: loginService, private _Router: Router,
    private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      first_name: new FormControl(null, [Validators.minLength(3), Validators.required]),
      last_name: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.min(16), Validators.max(80), Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    })
  }
  submitRegisterForm(registerForm: FormGroup) {
    this._authservic.login(registerForm.value).subscribe((response: any) => {
      if (response.message == 'success') {
        this._Router.navigate(['/home'])
      }
      else {
        this.error = response.errors.email.message
      }
    })
  }
  get f() {
    return this.form.controls;
  }
}
