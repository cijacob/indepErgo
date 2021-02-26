import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  template: `
    <div class="intro_block">
      <div class="bg_title"><h3 class="title">{{ title }}</h3></div>
      <div class="img">
        <img class="ballon_1" src="../assets/images/balles_7.png" alt="indepergo img ballon">
        <img class="ballon_2" src="../assets/images/balles_6.png" alt="indepergo img ballon">
        <div class="shadow"></div>
        <div class="shadow_2"></div>
      </div>
    </div>
  `,
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = `indep'
  Ergo`;
}
