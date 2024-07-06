import { Component, OnInit } from '@angular/core';
import { PpnService } from '../services/ppn.service';

@Component({
  selector: 'app-trackstatus',
  templateUrl: './trackstatus.component.html',
  styleUrl: './trackstatus.component.css'
})
export class TrackstatusComponent implements OnInit {

  userStatus: any = {
    application: false,
    funding: false,
    debitCardDispatched: false
  };

  constructor(private ppnservice: PpnService) { }

  ngOnInit(): void {
    const userid = this.ppnservice.getUser();
    this.ppnservice.changeTitle('Track status');
    // const userid = "3cf9";
    if (userid) {
      this.ppnservice.fetchUserDataByUserid(userid).subscribe(user => {
        this.userStatus.application = user.applicationCompleted;
        this.userStatus.funding = user.fundingCompleted;
        this.userStatus.debitCardDispatched = user.debitCardDispatched;
      });
    }
  }
}
