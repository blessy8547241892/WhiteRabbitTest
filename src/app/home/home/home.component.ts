import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
export interface Data {
  userId: string;
  Id: number;
  title: number;
  completed: boolean;
}

const ELEMENT_DATA: Data[] = [
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'userId', 'title', 'completed'];
  
  dataSource : any = [];
  constructor(private homeService: HomeService,) { }

  ngOnInit(): void {
    this.homeService.getUsers().subscribe(data => {
      console.log(data);
      localStorage.setItem('UsersList', JSON.stringify(data['results']))
    });
    let userData = localStorage.getItem('UsersList');
    this.dataSource = JSON.stringify(userData);
  }
}

