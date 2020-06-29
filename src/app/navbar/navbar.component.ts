import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  projectName:string;
  constructor() {
    this.projectName = "team4.photography";
  };

  ngOnInit(): void {
  }

}
