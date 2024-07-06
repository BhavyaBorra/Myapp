import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { updateEmail } from '../store/email.actions';
import { PpnService } from '../services/ppn.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-useremail',
  templateUrl: './useremail.component.html',
  styleUrl: './useremail.component.css'
})
export class UseremailComponent implements OnInit{
  emailForm!: FormGroup;
  showOtpModal: boolean = false;
  newEmail: string | undefined;
  
  constructor(
    private formbuilder: FormBuilder,
    private store: Store,
    private ppnservice: PpnService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.emailForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
    this.ppnservice.changeTitle('Update Email');
  }

  onSubmit(): void {
    if (this.emailForm.valid) {
      this.newEmail = this.emailForm.get('email')?.value;
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
    if (userid && this.newEmail) {
      this.store.dispatch(updateEmail({ userid, newEmail: this.newEmail }));
      this.router.navigate(['/loginhome/updateaccount/updateaccounthome']);
    }
    this.showOtpModal = false;
  }

  onCloseOtp() {
    this.showOtpModal = false;
  }
}

// import { Component } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// // import * as UserActions from '../store/actions/user.actions';
// // import { UserState } from '../store/reducers/user.reducer';

// @Component({
//   selector: 'app-useremail',
//   templateUrl: './useremail.component.html'
// })
// export class UseremailComponent {
//   emailForm: FormGroup;

//   constructor(private fb: FormBuilder
//     // private store: Store<{ user: UserState }>
//   ) {
//     this.emailForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]]
//     });
//   }

//   onSubmit() {
//     if (this.emailForm.valid) {
//       const { email } = this.emailForm.value;
//       console.log("email submitted");
//       // this.store.dispatch(UserActions.updateUserEmail({ email }));
//     }
//     else {
//       console.log("Invalid email");
//     }
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-useremail',
//   templateUrl: './useremail.component.html',
//   styleUrl: './useremail.component.css'
// })
// export class UseremailComponent implements OnInit{
//   emailForm!: FormGroup;
//   constructor( private formbuilder: FormBuilder) {}

//   ngOnInit(): void {
//     this.emailForm = this.formbuilder.group({
//       email: ['', [Validators.required, Validators.email]],
//     })
//   }

//   onSubmit(): void {
//     if (this.emailForm.valid){
//       const rdeatils=this.emailForm.value;
//       console.log(rdeatils);
//     }
//     else{
//       console.log("invalid");
//     }
//   }
// }
