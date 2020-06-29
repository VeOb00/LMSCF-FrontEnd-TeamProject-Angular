import { Component, OnInit } from '@angular/core';
import { photos } from './photos';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements OnInit {
    photos = photos;

  constructor() { }

  ngOnInit(): void {
  }

}