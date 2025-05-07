import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-table',
  standalone: false,
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent implements OnInit { 
  users:any[] = [];
  nameSearch: string = '';
  companySearch: string = '';
  designationSearch: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://zil-test.s3.us-east-1.amazonaws.com/json-data.json').subscribe(data => this.users = data);
  }
}
