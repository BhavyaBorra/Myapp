import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component'; 
import { PpnService } from '../services/ppn.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataService: DataService,
    private dialog: MatDialog,
    private ppnService: PpnService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      passportNumber: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8}$/)]],
      dateOfBirth: ['', [Validators.required]],
      country: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+(?:\s[A-Za-z]+)*$/)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.openDialog('Invalid fields', 'Please correct and try again.');
    } else {
      const ppn = this.loginForm.get('passportNumber')?.value;
      const dob = this.loginForm.get('dateOfBirth')?.value;
      let con = this.loginForm.get('country')?.value;
      con = con.toLowerCase();
      this.dataService.fetchUserData().subscribe((users: any) => {
        const user = users.find((u: any) => u.passportNumber === ppn && u.dateOfBirth === dob && u.country === con);
        if (user) {
          this.ppnService.setUser(user.id);
          this.router.navigate(['/loginhome']);
          console.log(user.id);
        } else {
          this.openDialog('Error', 'Details Not found');
        }
      });
    }
  }

  openDialog(title: string, message: string): void {
    this.dialog.open(AlertDialogComponent, {
      width: '300px',
      data: { title: title, message: message }
    });
  }
  
}
