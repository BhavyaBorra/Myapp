import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-otpgen',
  templateUrl: './otpgen.component.html',
  styleUrls: ['./otpgen.component.css']
})
export class OtpgenComponent {
  otp: string = '';
  userInput: string = '';
  isInvalidOtp: boolean = false;

  @Output() otpVerified = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  constructor() {
    this.generateOtp();
  }

  generateOtp() {
    this.otp = Math.floor(100000 + Math.random() * 900000).toString();
  }

  validateOtp() {
    this.isInvalidOtp = this.userInput.length === 6 && this.userInput !== this.otp;
  }

  resendOtp() {
    this.generateOtp();
    this.userInput = '';
    this.isInvalidOtp = false;
  }

  submitOtp() {
    if (this.userInput === this.otp) {
      this.otpVerified.emit();
    } else {
      this.isInvalidOtp = true;
    }
  }

  closeOtp() {
    this.close.emit();
  }
}
