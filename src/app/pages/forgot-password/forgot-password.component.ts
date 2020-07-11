import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { AuthService } from 'app/services/auth-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  frmPasswordReset: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]]
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }



  resetPassword(form: NgForm) {
    this.auth.resetPassword(form.value.email);
    this.frmPasswordReset.reset();
    
  }

  Login(){
    this.router.navigate(['/login'])
  }
}
