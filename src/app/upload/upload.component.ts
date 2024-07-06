import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { uploadFile } from '../store/upload.actions';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  uploadForm: FormGroup;
  file: File | null = null;
  filePreviewUrl: string | ArrayBuffer | null = null;
  previewVisible = false;

  constructor(private fb: FormBuilder, private store: Store<any>) {
    this.uploadForm = this.fb.group({
      visaNumber: ['', Validators.required],
      passportNumber: ['', Validators.required],
      expiryDate: ['', Validators.required],
      agree: [true, Validators.requiredTrue],
      // file: ['', Validators.required]
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'application/pdf')) {
      this.file = file;

      // Generate preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        this.filePreviewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      this.file = null;
      this.filePreviewUrl = null;
    }
  }

  onSubmit() {
    if (this.uploadForm.valid && this.file) {
      console.log("entered onsubmit");
      console.log(this.uploadForm.value);
      console.log(this.file);
      const formData = { ...this.uploadForm.value, file: this.file };
      this.store.dispatch(uploadFile({ fileData: formData }));
    }
    else{
      console.log("invalid details");
      console.log(this.uploadForm.value);
      console.log(this.file);
    }
  }

  togglePreview() {
    this.previewVisible = !this.previewVisible;
  }

  closePreview() {
    this.previewVisible = false;
  }

  deleteFile() {
    this.file = null;
    this.filePreviewUrl = null;
    this.uploadForm.reset();
    this.previewVisible = false;
  }
}
