import { Component, OnInit } from '@angular/core';
import { PpnService } from '../services/ppn.service';

@Component({
  selector: 'app-userconsent',
  templateUrl: './userconsent.component.html',
  styleUrl: './userconsent.component.css'
})
export class UserconsentComponent implements OnInit{

  constructor (private ppnservice: PpnService) {}

  ngOnInit(): void {
    this.ppnservice.changeTitle('Communication Consent');
  }
}
