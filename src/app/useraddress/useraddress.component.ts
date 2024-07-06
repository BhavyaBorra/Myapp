import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { updateAddress } from '../store/address.actions';
import { PpnService } from '../services/ppn.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-useraddress',
  templateUrl: './useraddress.component.html',
  styleUrl: './useraddress.component.css'
})
export class UseraddressComponent implements OnInit {
  registerForm!: FormGroup;
  showOtpModal: boolean = false;
  newEmail: string | undefined;
  newAddressline1: string | undefined;
  newAddressline2: string | undefined;
  newPostalcode: string | undefined;
  newCountry: string | undefined;

  constructor(
    private formbuilder: FormBuilder,
    private store: Store,
    private ppnservice: PpnService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ppnservice.changeTitle('Update Address');
    this.registerForm = this.formbuilder.group({
      addressline1: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9][A-Za-z0-9\s]*$/)]],
      addressline2: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9][A-Za-z0-9\s]*$/)]],
      postalcode: ['', [Validators.required, Validators.pattern(/^\d{5,6}$/)]],
      country: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+(?:\s[A-Za-z]+)*$/)]]
    })
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.newAddressline1 = this.registerForm.get('addressline1')?.value;
      this.newAddressline2 = this.registerForm.get('addressline2')?.value;
      this.newPostalcode = this.registerForm.get('postalcode')?.value;
      this.newCountry = this.registerForm.get('country')?.value.toLowerCase();;
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
    if (userid && this.newAddressline1 && this.newAddressline2 && this.newPostalcode && this.newCountry) {
      this.store.dispatch(updateAddress({
        userid,
        newAddressline1: this.newAddressline1,
        newAddressline2: this.newAddressline2,
        newPostalcode: this.newPostalcode, 
        newCountry: this.newCountry

      }));
      this.router.navigate(['/loginhome/updateaccount/updateaccounthome']);
    }
    this.showOtpModal = false;
  }

  onCloseOtp() {
    this.showOtpModal = false;
  }

}

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Store } from '@ngrx/store';
// // import * as UserActions from '../store/actions/user.actions';
// // import { UserState } from '../store/reducers/user.reducer';

// @Component({
//   selector: 'app-useraddress',
//   templateUrl: './useraddress.component.html',
//   styleUrls: ['./useraddress.component.css']
// })
// export class UseraddressComponent implements OnInit {
//   registerForm!: FormGroup;
//   constructor(private formbuilder: FormBuilder
//     // private store: Store<{ user: UserState }>
//   ) {}

//   ngOnInit(): void {
//     this.registerForm = this.formbuilder.group({
//       addressline1: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9][A-Za-z0-9\s]*$/)]],
//       addressline2: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9][A-Za-z0-9\s]*$/)]],
//       postalcode: ['', [Validators.required, Validators.pattern(/^\d{5,6}$/)]],
//       country: ['', [Validators.required, Validators.pattern(/^[a-z]+(?:\s[a-z]+)*$/)]]
//     })
//   }

//   onSubmit(): void {
//     if (this.registerForm.valid) {
//       const { addressline1, addressline2, postalcode, country } = this.registerForm.value;
//       // this.store.dispatch(UserActions.updateUserAddress({
//       //   addressline1: addressline1,
//       //   addressline2: addressline2,
//       //   postalcode: postalcode,
//       //   country: country
//       // }));
//     } else {
//       console.log("invalid");
//     }
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-useraddress',
//   templateUrl: './useraddress.component.html',
//   styleUrl: './useraddress.component.css'
// })
// export class UseraddressComponent implements OnInit {
//   registerForm!: FormGroup;
//   constructor( private formbuilder: FormBuilder) {}

//   ngOnInit(): void {
//     this.registerForm = this.formbuilder.group({
//       addressline1: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9][A-Za-z0-9\s]*$/)]],
//       addressline2: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9][A-Za-z0-9\s]*$/)]],
//       postalcode: ['', [Validators.required, Validators.pattern(/^\d{5,6}$/)]],
//       country: ['', [Validators.required, Validators.pattern(/^[a-z]+(?:\s[a-z]+)*$/)]]
//     })
//   }
//   onSubmit(): void {
//     if (this.registerForm.valid){
//       const rdeatils=this.registerForm.value;
//       console.log(rdeatils);
//     }
//     else{
//       console.log("invalid");
//     }
//   }

// }
