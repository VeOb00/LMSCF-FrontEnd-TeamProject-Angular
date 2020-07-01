import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  projectName:string;
  constructor() {
    this.projectName = "team4.photography";
  };

  toTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  

  ngOnInit(): void {
  }

}
