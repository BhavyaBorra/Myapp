import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  activeTab: string = 'login';

  constructor() {}

  openTab(tabName: string) {
    this.activeTab = tabName;
  }
}
