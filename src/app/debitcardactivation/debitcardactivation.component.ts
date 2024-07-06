import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PpnService } from '../services/ppn.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-debitcardactivation',
  templateUrl: './debitcardactivation.component.html',
  styleUrl: './debitcardactivation.component.css'
})
export class DebitcardactivationComponent implements OnInit {

  activationForm!: FormGroup;
  user: any = null;
  accountNumbers: string[] = [];
  debitCards: string[] = [];

  constructor(
    private formbuilder: FormBuilder,
    private ppnService: PpnService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activationForm = this.formbuilder.group({
      accountNumber: ['', Validators.required],
      cardNumber: ['', Validators.required],
      name: [{ value: '', disabled: true }, Validators.required],
      email: [{ value: '', disabled: true }, Validators.required]
    });
    this.ppnService.changeTitle('Debit Card Activation');

    const userId = this.ppnService.getUser();
    if (userId) {
      this.ppnService.fetchUserDataByUserid(userId).subscribe(
        (user: any) => {
          this.user = user;
          this.populateForm();
        },
        error => {
          console.error('Error fetching user details:', error);
        }
      );
    }
  }

  populateForm(): void {
    if (this.user) {
      this.activationForm.patchValue({
        name: this.user.username,
        email: this.user.email
      });

      const accountNumbers = this.user.accountnumber || [];

      this.activationForm.get('accountNumber')?.valueChanges.subscribe(accountNumber => {
        const selectedAccountNumber = this.activationForm.get('accountNumber')?.value;
        if (selectedAccountNumber) {
          this.debitCards = (this.user.debitcard || []);
        } else {
          this.debitCards = [];
        }
      });
    }
  }

  onSubmit(): void {
    if (this.activationForm.valid) {
      console.log(this.activationForm.value);
      this.router.navigate(['/loginhome/debitcardrelated/dbrhome']);
    } else {
      console.log("inavlid details");
    }
  }

  onPrevious(): void {
    this.router.navigate(['/loginhome/debitcardrelated/dbrhome']);
  }
}
