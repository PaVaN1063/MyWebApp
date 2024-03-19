import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './Services/api.service';
import { apis } from './Services/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'MyWebApp';
  apiUrl = 'http://localhost:8080/';
users : any=[]
  constructor(private http: HttpClient, private service: ApiService) {}

  ngOnInit(): void {
   
  }
}
