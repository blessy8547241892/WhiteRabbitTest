import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Email', 'Phone','Gender', 'DOB'];
  searchText: string;
  users : any;
  userData: any;
  constructor(private homeService: HomeService,) { }

  ngOnInit(): void {
    this.homeService.getUsers().subscribe(data => {
      console.log(data);
      localStorage.setItem('UsersList', JSON.stringify(data['results']))
    });
    this.userData = localStorage.getItem('UsersList');
    this.users = JSON.parse(this.userData);
  }
}

