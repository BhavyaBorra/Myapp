import { Component, OnInit } from '@angular/core';
import { PpnService } from '../services/ppn.service';

@Component({
  selector: 'app-uahome',
  templateUrl: './uahome.component.html',
  styleUrl: './uahome.component.css'
})
export class UahomeComponent  implements OnInit{

  constructor(private ppnservice: PpnService){}

  ngOnInit(): void {
    this.ppnservice.changeTitle('Update Account Information');
  }
}
