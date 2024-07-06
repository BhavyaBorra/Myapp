import { Component, OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { DataService } from '../data.service';
import { PpnService } from '../services/ppn.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  userDetails: any;
  lastVisited: string = '';
  title: string = '';

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private dataservice: DataService,
    private ppnService: PpnService,
    private changeDetector: ChangeDetectorRef
  ) {}

  navigateTo(page: string): void {
    this.router.navigate(['loginhome/' + page]);
  }

  ngOnInit(): void {
    this.fetchUserDetails();
    this.ppnService.currentTitle.subscribe(title => this.title = title);

    const now = new Date();
    this.lastVisited = this.formatDate(now);
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  fetchUserDetails() {
    const userid = this.ppnService.getUser();
    if (userid) {
      this.dataservice.fetchUserDataByUserid(userid).subscribe((user: any) => {
        this.userDetails = user;
      });
    }
  }

  formatDate(date: Date): string {
    return `${date.getDate()}th ${this.getMonthName(date.getMonth())} ${date.getFullYear()} ${this.formatTime(date)}`;
  }

  formatTime(date: Date): string {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  getMonthName(month: number): string {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[month];
  }

  logout(): void {
    this.openDialog('Logout', 'You have logged out');
    this.ppnService.clearUser();
    // const navigationExtras: NavigationExtras = {
    //   skipLocationChange: true
    // };
    // this.router.navigate(['/home'], navigationExtras);
    this.router.navigate(['/home']);
  }

  openDialog(title: string, message: string): void {
    this.dialog.open(AlertDialogComponent, {
      width: '300px',
      data: { title: title, message: message }
    });
  }
}
