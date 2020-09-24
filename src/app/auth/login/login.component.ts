import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CurrentUser } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  error: any;
  user: CurrentUser = null;
  loginForm: any;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private auth: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.user = this.auth.currentUserValue;
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    // console.log(this.loginForm);

    const { username, password } = this.loginForm.value;
    this.auth.login(username, password).subscribe(
      (user) => {
        this.user = user;
        this.dialogRef.close();
      },
      (error) => {
        console.log('Login Error: ', error);
        this.error = error;
      }
    );
  }
}
