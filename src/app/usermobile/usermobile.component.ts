import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { updateMobileNumber } from '../store/mobile.actions';
import { PpnService } from '../services/ppn.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usermobile',
  templateUrl: './usermobile.component.html',
  styleUrls: ['./usermobile.component.css']
})
export class UsermobileComponent implements OnInit {
  mobileForm!: FormGroup;
  showOtpModal: boolean = false;
  newMobileNumber: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private ppnservice: PpnService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mobileForm = this.formBuilder.group({
      mobilenumber: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]]
    });
    this.ppnservice.changeTitle('Update Mobile Number');
  }

  onSubmit(): void {
    if (this.mobileForm.valid) {
      this.newMobileNumber = this.mobileForm.get('mobilenumber')?.value;
      this.showOtpModal = true;
    } else {
      console.log("invalid");
    }
  }

  onPrevious(): void {
    this.router.navigate(['/loginhome/updateaccount/updateaccounthome']);
  }

  onOtpVerified(): void {
    const userid = this.ppnservice.getUser();
    if (userid && this.newMobileNumber) {
      this.store.dispatch(updateMobileNumber({ userid, newMobileNumber: this.newMobileNumber }));
      this.router.navigate(['/loginhome/updateaccount/updateaccounthome']);
    }
    this.showOtpModal = false;
  }

  onCloseOtp() {
    this.showOtpModal = false;
  }
}


//-----------------------

// import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import * as UserActions from '../store/actions/user.actions';
// import { UserState } from '../store/reducers/user.reducer';

// @Component({
//   selector: 'app-usermobile',
//   templateUrl: './usermobile.component.html'
// })
// export class UsermobileComponent implements OnInit{
//   mobileForm!: FormGroup;
//   user: any;

//   constructor(private fb: FormBuilder, private store: Store<{ user: UserState }>) {
//     store.select('user').subscribe(
//       data => {
//         this.user=data;
//         console.log(this.user);
//       }
//     )
//   }

//   ngOnInit(): void {
//     this.mobileForm = this.fb.group({
//       mobilenumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
//     });
//   }

//   onSubmit() {
//     if (this.mobileForm.valid) {
//       console.log("mobile submitted");
//       const { mobilenumber } = this.mobileForm.value;
//       this.store.dispatch(UserActions.updateUserMobile({ mobilenumber }));
//     }
//   }
// }

//----------------------------------

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-usermobile',
//   templateUrl: './usermobile.component.html',
//   styleUrl: './usermobile.component.css'
// })
// export class UsermobileComponent implements OnInit{
//   mobileForm!: FormGroup;
//   constructor( private formbuilder: FormBuilder) {}

//   ngOnInit(): void {
//     this.mobileForm = this.formbuilder.group({
//       mobilenumber: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]],
//     })
//   }

//   onSubmit(): void {
//     if (this.mobileForm.valid){
//       const rdeatils=this.mobileForm.value;
//       console.log(rdeatils);
//     }
//     else{
//       console.log("invalid");
//     }
//   }
// }
