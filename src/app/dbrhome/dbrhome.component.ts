import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PpnService } from '../services/ppn.service';

@Component({
  selector: 'app-dbrhome',
  templateUrl: './dbrhome.component.html',
  styleUrl: './dbrhome.component.css'
})
export class DbrhomeComponent implements OnInit{

  constructor(private router: Router,private ppnservice: PpnService) {}

  navigateTo(page: string): void {
    this.router.navigate(['loginhome/debitcardrelated/' + page]);
  }

  ngOnInit(): void {
    this.ppnservice.changeTitle('Debit Card Details');
  }
}
