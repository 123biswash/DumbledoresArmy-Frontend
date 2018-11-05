import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted))
    }
}

@Component({
    selector: 'login-button',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css' ]
})

export class LoginComponent {
    emailFormControl = new FormControl('', [ Validators.required, Validators.email ])
    matcher = new MyErrorStateMatcher()
    hide = true

    constructor(private authService: AuthService, private router: Router) { }

    onSubmit(email, pass) {
        //console.log('Submit button clicked email: ' + email + ' password: ' + pass)
        this.authService.signInWithFirebaseAndGetToken(email, pass)
            .then(res => console.log(res))
            .then(() => this.router.navigate(['/']));
    }
}