import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatStepperModule } from '@angular/material/stepper'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterhomeComponent } from './registerhome/registerhome.component';
import { LoginhomeComponent } from './loginhome/loginhome.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { UpdateaccountComponent } from './updateaccount/updateaccount.component';
import { TrackstatusComponent } from './trackstatus/trackstatus.component';
import { LayoutComponent } from './layout/layout.component';
import { UseraddressComponent } from './useraddress/useraddress.component';
import { UseremailComponent } from './useremail/useremail.component';
import { UsermobileComponent } from './usermobile/usermobile.component';
import { UserconsentComponent } from './userconsent/userconsent.component';
import { UahomeComponent } from './uahome/uahome.component';
// import { userReducer } from './store/reducers/user.reducer';
import { mobileReducer } from './store/mobile.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MobileEffects } from './store/mobile.effects';
import { emailReducer } from './store/email.reducer';
import { EmailEffects } from './store/email.effects';
import { addressReducer } from './store/address.reducer';
import { AddressEffects } from './store/address.effects';
import { OtpgenComponent } from './otpgen/otpgen.component';
import { ActivateaccountComponent } from './activateaccount/activateaccount.component';
import { UploadComponent } from './upload/upload.component';
import { UploadEffects } from './store/upload.effects';
import { uploadReducer } from './store/upload.reducer';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { DebitcardrealatedComponent } from './debitcardrealated/debitcardrealated.component';
import { DebitcardactivationComponent } from './debitcardactivation/debitcardactivation.component';
import { DebitcardstatusComponent } from './debitcardstatus/debitcardstatus.component';
import { DebitcardreorderComponent } from './debitcardreorder/debitcardreorder.component';
import { DbrhomeComponent } from './dbrhome/dbrhome.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'loginhome', 
    component: LayoutComponent ,
    children: [
      { path: '', redirectTo: 'homecontent', pathMatch: 'full' },
      { path: 'homecontent', component: LoginhomeComponent },
      {
        path: 'updateaccount',
        component: UahomeComponent,
        children: [
          { path: '', redirectTo: 'updateaccounthome', pathMatch: 'full' },
          { path: 'updateaccounthome', component: UpdateaccountComponent },
          { path: 'useraddress', component: UseraddressComponent },
          { path: 'useremail', component: UseremailComponent },
          { path: 'usermobile', component: UsermobileComponent },
          { path: 'userconsent', component: UserconsentComponent }
        ]
      },
      { path: 'trackstatus', component: TrackstatusComponent },
      { path: 'activateaccount', component:ActivateaccountComponent },
      { path: 'upload', component:UploadComponent },
      {
        path: 'debitcardrelated',
        component: DebitcardrealatedComponent,
        children: [
          { path: '', redirectTo: 'dbrhome', pathMatch: 'full' },
          { path: 'dbrhome', component: DbrhomeComponent },
          { path: 'debitcardactivation', component: DebitcardactivationComponent },
          { path: 'debitcardstatus', component: DebitcardstatusComponent },
          { path: 'debitcardreorder', component: DebitcardreorderComponent },
        ]
      }
    ]
  },
  { path: 'registerhome', component: RegisterhomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RegisterhomeComponent,
    LoginhomeComponent,
    AlertDialogComponent,
    UpdateaccountComponent,
    TrackstatusComponent,
    LayoutComponent,
    UseraddressComponent,
    UseremailComponent,
    UsermobileComponent,
    UserconsentComponent,
    UahomeComponent,
    OtpgenComponent,
    ActivateaccountComponent,
    UploadComponent,
    DebitcardrealatedComponent,
    DebitcardactivationComponent,
    DebitcardstatusComponent,
    DebitcardreorderComponent,
    DbrhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot({mobile: mobileReducer, email: emailReducer, address: addressReducer, upload: uploadReducer}),
    EffectsModule.forRoot([MobileEffects, EmailEffects, AddressEffects, UploadEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    MatStepperModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule,
    AutocompleteLibModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
