import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'app/services/auth-service.service';

declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading=false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { 
   
  }

  ngOnInit() {
    $( '.btn' ).click( function() {
     
      $( '#header' ).hide(); 
      $( '.login-wrap' ).show();
  });
  }

  onSignin(form: NgForm) {
    if(form.valid){
      const email = form.value.email;
      const password = form.value.password;
      this.authService.signinUser(email, password);
      this.isLoading=true;
   
    }else{
      this.toastr.warning('Please enter valid details.','Wrong credentials');
    }
  }
  forgotPassword(){
    this.router.navigate(['forgot-password']);
  }
}
