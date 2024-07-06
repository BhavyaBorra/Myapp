import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PpnService } from '../services/ppn.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-debitcardreorder',
  templateUrl: './debitcardreorder.component.html',
  styleUrl: './debitcardreorder.component.css'
})
export class DebitcardreorderComponent {
  reorderForm!: FormGroup;
  user: any = null;
  reasons : string[] = ["DAMAGED","LOST","STOLEN","SWALLOWED AT OTHER BANK ATM","CUSTOMER CARE SUGGESTION"];

  constructor(
    private formbuilder: FormBuilder,
    private ppnService: PpnService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reorderForm = this.formbuilder.group({
      accountNumber: ['', Validators.required],
      reason: ['', Validators.required]
    });
    this.ppnService.changeTitle('Debit Card Reorder');

    const userId = this.ppnService.getUser();
    // const userId = "3cf9";
    if (userId) {
      this.ppnService.fetchUserDataByUserid(userId).subscribe(
        (user: any) => {
          this.user = user;
          if (this.user) {
            const accountNumbers = this.user.accountnumber || [];
          }
        },
        error => {
          console.error('Error fetching user details:', error);
        }
      );
    }
  }

  onSubmit(): void {
    if (this.reorderForm.valid) {
      console.log(this.reorderForm.value);
      this.router.navigate(['/loginhome/debitcardrelated/dbrhome']);
    } else {
      console.log("inavlid details");
    }
  }

  onPrevious(): void {
    this.router.navigate(['/loginhome/debitcardrelated/dbrhome']);
  }

}
