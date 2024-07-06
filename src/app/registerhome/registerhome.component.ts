import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerhome',
  templateUrl: './registerhome.component.html',
  styleUrls: ['./registerhome.component.css']
})
export class RegisterhomeComponent implements OnInit {
  registerForm!: FormGroup;

  passwordRequirements = {
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumeric: false,
    hasNonAlphaNumeric: false,
    isAtLeastEight: false,
    doesNotContainEmail: false
  };

  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^(?=.*[a-zA-Z])[A-Za-z][A-Za-z\s]*$/)]],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', [Validators.required, this.ageValidator(18)]],
      passportNumber: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8}$/)]],
      country: ['', [Validators.required]],
      addressline1: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9][A-Za-z0-9\s]*$/)]],
      addressline2: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9][A-Za-z0-9\s]*$/)]],
      postalcode: ['', [Validators.required, Validators.pattern(/^\d{5,6}$/)]],
      mobilenumber: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&].{8,}$/)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });

     this.registerForm.controls['password'].valueChanges.subscribe(value => {
      this.checkPasswordRequirements(value);
    });

    this.registerForm.controls['email'].valueChanges.subscribe(() => {
      this.checkPasswordRequirements(this.registerForm.controls['password'].value);
    });
  }

  ageValidator(minAge: number) {
    return (control: { value: string; }) => {
      const today = new Date();
      const birthDate = new Date(control.value);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age >= minAge ? null : { ageInvalid: true };
    };
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')!.value === form.get('confirmPassword')!.value ? null : { mismatch: true };
  }

  checkPasswordRequirements(password: string) {
    const email = this.registerForm.controls['email'].value || '';

    this.passwordRequirements.hasUpperCase = /[A-Z]/.test(password);
    this.passwordRequirements.hasLowerCase = /[a-z]/.test(password);
    this.passwordRequirements.hasNumeric = /\d/.test(password);
    this.passwordRequirements.hasNonAlphaNumeric = /[@$!%*?&]/.test(password);
    this.passwordRequirements.isAtLeastEight = password.length >= 8;
    this.passwordRequirements.doesNotContainEmail = !password.includes(email);
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      alert('Registration unsuccessful!');
      console.log(this.registerForm.value);
    } else {
      const userdetails = this.registerForm.value;
      this.dataService.registerUser(userdetails).subscribe(response => {
        console.log('Data posted success', response);
        this.router.navigate(['/home']);
      });
    }
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
