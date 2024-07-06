import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PpnService } from '../services/ppn.service';

@Component({
  selector: 'app-updateaccount',
  templateUrl: './updateaccount.component.html',
  styleUrls: ['./updateaccount.component.css']
})
export class UpdateaccountComponent implements OnInit{
  constructor(private router: Router, private ppnservice: PpnService) {}

  navigateTo(page: string): void {
    this.router.navigate(['loginhome/updateaccount/' + page]);
  }

  ngOnInit(): void {
    this.ppnservice.changeTitle('Update Account Information');
  }
}
