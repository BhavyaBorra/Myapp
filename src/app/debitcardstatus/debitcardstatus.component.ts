import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PpnService } from '../services/ppn.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-debitcardstatus',
  templateUrl: './debitcardstatus.component.html',
  styleUrl: './debitcardstatus.component.css'
})
export class DebitcardstatusComponent {

  statusForm!: FormGroup;
  user: any = null;

  constructor(
    private formbuilder: FormBuilder,
    private ppnService: PpnService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.statusForm = this.formbuilder.group({
      accountNumber: ['', Validators.required]
    });
    this.ppnService.changeTitle('Debit card Status');

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
    if (this.statusForm.valid) {
      console.log(this.statusForm.value);
      this.router.navigate(['/loginhome/debitcardrelated/dbrhome']);
    } else {
      console.log("inavlid details");
    }
  }

  onPrevious(): void {
    this.router.navigate(['/loginhome/debitcardrelated/dbrhome']);
  }

}
