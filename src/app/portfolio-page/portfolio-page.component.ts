import { Component, OnInit } from '@angular/core';
import { photos } from './photos';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements OnInit {
    photos = photos;
    types: Set<string> = new Set();
    allTypes: Set<string> = new Set();

  constructor() {
      this.photos.forEach(photo => this.allTypes.add(photo.type));
      this.types = new Set(this.allTypes);
   }

  ngOnInit(): void {
  }

  public setOneType(type: string) {
      this.types.clear();
      this.types.add(type);
  }

  public setAllTypes() {
    this.types = new Set(this.allTypes);
}

}
