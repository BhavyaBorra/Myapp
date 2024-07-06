import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PpnService } from '../services/ppn.service';

@Component({
  selector: 'app-loginhome',
  templateUrl: './loginhome.component.html',
  styleUrls: ['./loginhome.component.css']
})
export class LoginhomeComponent implements OnInit{
  constructor(private router: Router, private ppnservice: PpnService) {}

  navigateTo(page: string): void {
    this.router.navigate(['loginhome/' + page]);
  }
  ngOnInit(): void {
    this.ppnservice.changeTitle('Dashboard');
  }
}


// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
// import { DataService } from '../data.service';
// import { MatDialog } from '@angular/material/dialog';
// import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component'; 

// @Component({
//   selector: 'app-loginhome',
//   templateUrl: './loginhome.component.html',
//   styleUrls: ['./loginhome.component.css']
// })
// export class LoginhomeComponent implements OnInit {
//   uppn: string = '';
//   userDetails: any;
//   lastVisited: string = '';

//   constructor(private router: Router, private aroute:ActivatedRoute, private dataService: DataService, private dialog: MatDialog) { }

//   navigateTo(page: string): void {
//     this.router.navigate([page]);
//   }

//   ngOnInit(): void {
//     this.uppn = localStorage.getItem('passportNumber') || '';
//     this.fetchUserDetails(this.uppn);

//     const now = new Date();
//     this.lastVisited = this.formatDate(now);
//   }

//   formatDate(date: Date): string {
//     return `${date.getDate()}th ${this.getMonthName(date.getMonth())} ${date.getFullYear()} ${this.formatTime(date)}`;
//   }

//   formatTime(date: Date): string {
//     const hours = date.getHours().toString().padStart(2, '0');
//     const minutes = date.getMinutes().toString().padStart(2, '0');
//     const seconds = date.getSeconds().toString().padStart(2, '0');
//     return `${hours}:${minutes}:${seconds}`;
//   }

//   getMonthName(month: number): string {
//     const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     return months[month];
//   }

//   fetchUserDetails(usersppn: string) {
//     this.dataService.fetchUserDataByUserppn(usersppn).subscribe((user: any) => {
//       this.userDetails = user;
//     });
//   }

//   logout(): void {
//     this.openDialog('Logout', 'You have logged out');
//     localStorage.removeItem('passportNumber');
//     const navigationExtras: NavigationExtras = {
//       skipLocationChange: true
//     };
//     this.router.navigate(['home'], navigationExtras);
//   }

//   openDialog(title: string, message: string): void {
//     this.dialog.open(AlertDialogComponent, {
//       width: '300px',
//       data: { title: title, message: message }
//     });
//   }
// }
