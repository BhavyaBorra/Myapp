import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PpnService } from '../services/ppn.service';

@Component({
  selector: 'app-activateaccount',
  templateUrl: './activateaccount.component.html',
  styleUrls: ['./activateaccount.component.css']
})
export class ActivateaccountComponent implements OnInit {
  form: FormGroup;
  currentStep = 1;
  uploadedFile: File | null = null;
  fileURL: SafeResourceUrl | null = null;
  fileType: string = '';
  fileDialogVisible = false;
  uploadedFile1: File | null = null;
  fileURL1: SafeResourceUrl | null = null;
  fileType1: string = '';
  fileDialogVisible1 = false;
  keyword = 'name';
  public countries = [
    { id: 1, name: 'Germany' },
    { id: 2, name: 'India' },
    { id: 3, name: 'US' }
  ];

  constructor(private fb: FormBuilder, private http: HttpClient, private sanitizer: DomSanitizer, private ppnservice: PpnService) {
    this.form = this.fb.group({
      activationStatus: ['', Validators.required],
      uploadedFile: [null],
      uploadedFile1: [null],
      confirmation: ['', Validators.required],
      visanumber: ['', [Validators.required, Validators.pattern(/^\d{20}$/)]],
      issuingauthority: ['', Validators.required],
      expirydate: ['', [Validators.required, this.minDateValidator()]],
      passportNumber: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8}$/)]],
      issuingauthority1: ['', Validators.required],
      expirydate1: ['', [Validators.required, this.minDateValidator()]],
      termsAgreed: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void { 
    this.ppnservice.changeTitle('Activate Account');
  }

  onActivationChange(event: any) {
    this.form.get('activationStatus')?.setValue(event.target.value);
  }

  minDateValidator() {
    return (control: any): { [key: string]: any } | null => {
      const currentDate = new Date();
      const selectedDate = new Date(control.value);
      if (selectedDate < currentDate) {
        return { 'minDate': { value: control.value } };
      }
      return null;
    };
  }

  getSanitizedURL(url: SafeResourceUrl | null): string {
    if (url) {
      return url.toString();
    } else {
      return '';
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.uploadedFile = file;
      console.log('File MIME type:', file.type);
      this.fileType = file.type.includes('image') ? 'image' : 'pdf';
      const reader = new FileReader();
      reader.onload = () => {
        // this.fileURL = reader.result as string;
        this.fileURL = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(file));
        this.form.get('uploadedFile')?.setValue(file.name);
      };
      reader.readAsDataURL(file);
    }
  }

  onFileSelected1(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.uploadedFile1 = file;
      this.fileType1 = file.type.includes('image') ? 'image' : 'pdf';
      const reader = new FileReader();
      reader.onload = () => {
        this.fileURL1 = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(file));
        this.form.get('uploadedFile1')?.setValue(file.name);
      };
      reader.readAsDataURL(file);
    }
  }

  openFileDialog() {
    this.fileDialogVisible = true;
  }

  closeFileDialog() {
    this.fileDialogVisible = false;
  }

  deleteFile() {
    this.uploadedFile = null;
    this.fileURL = null;
    this.fileType = '';
    this.form.get('uploadedFile')?.setValue(null);
    this.closeFileDialog();
  }

  openFileDialog1() {
    this.fileDialogVisible1 = true;
  }

  closeFileDialog1() {
    this.fileDialogVisible1 = false;
  }

  deleteFile1() {
    this.uploadedFile1 = null;
    this.fileURL1 = null;
    this.fileType1 = '';
    this.closeFileDialog1();
  }


  setStep(step: number) {
    if (step < this.currentStep || this.validateCurrentStep()) {
      this.currentStep = step;
    }
  }

  nextStep() {
    if (this.currentStep < 3 && this.validateCurrentStep()) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  validateCurrentStep(): boolean {
    if (this.currentStep === 1) {
      return this.form.get('activationStatus')?.valid || false;
    } else if (this.currentStep === 2) {
      return (this.form.get('uploadedFile')?.valid && this.form.get('visanumber')?.valid) || false;
    } else if (this.currentStep === 3) {
      return this.form.get('confirmation')?.valid || false;
    }
    return true;
  }

  submitForm() {
    if (this.form.valid) {
      const formData = this.form.value;
      console.log("insubmit");
      this.http.post('http://localhost:8000/formData', formData).subscribe(response => {
        console.log('Data saved successfully', response);
      });
    } else {
      console.log('Form is not valid');
    }
  }

  selectEvent(item: any) {
    this.form.get('issuingauthority')?.setValue(item.name);
  }

  selectEvent1(item: any) {
    this.form.get('issuingauthority1')?.setValue(item.name);
  }
}


// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-activateaccount',
//   templateUrl: './activateaccount.component.html',
//   styleUrls: ['./activateaccount.component.css']
// })
// export class ActivateaccountComponent implements OnInit {
//   firstFormGroup!: FormGroup;
//   secondFormGroup!: FormGroup;
//   thirdFormGroup!: FormGroup;
//   uploadedFile: string | ArrayBuffer | null = null;

//   constructor(private _formBuilder: FormBuilder, private http: HttpClient) {}

//   ngOnInit() {
//     this.firstFormGroup = this._formBuilder.group({
//       firstQuestion: ['', Validators.required]
//     });
//     this.secondFormGroup = this._formBuilder.group({
//       visaNumber: ['', Validators.required],
//       issuingAuthority: ['', Validators.required],
//       expiryDate: ['', Validators.required],
//       agreement: [false, Validators.requiredTrue],
//     });
//     this.thirdFormGroup = this._formBuilder.group({
//       thirdQuestion: ['', Validators.required]
//     });
//   }

//   onFileSelected(event: Event) {
//     const input = event.target as HTMLInputElement;
//     if (input.files && input.files.length) {
//       const file = input.files[0];
//       const reader = new FileReader();
//       reader.onload = (e) => this.uploadedFile = reader.result;
//       reader.readAsDataURL(file);
//     }
//   }

//   closePreview() {
//     this.uploadedFile = null;
//   }

//   deleteFile() {
//     this.uploadedFile = null;
//   }

//   onSubmit() {
//     if (this.firstFormGroup.invalid || this.secondFormGroup.invalid || this.thirdFormGroup.invalid) {
//       return;
//     }

//     const formData = {
//       firstQuestion: this.firstFormGroup.value.firstQuestion,
//       visaNumber: this.secondFormGroup.value.visaNumber,
//       issuingAuthority: this.secondFormGroup.value.issuingAuthority,
//       expiryDate: this.secondFormGroup.value.expiryDate,
//       agreement: this.secondFormGroup.value.agreement,
//       thirdQuestion: this.thirdFormGroup.value.thirdQuestion,
//       uploadedFile: this.uploadedFile
//     };

//     this.http.post('http://localhost:8000/formData', formData).subscribe(response => {
//       console.log('Form data saved', response);
//     });
//   }
// }
