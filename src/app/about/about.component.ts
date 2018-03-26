import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public angRating = [5, 4, true];
  public nodeRating = [5, 3, true];
  public phpRating = [5, 5, true];
  public rjavaRating = [5, 3, true];
  public rjavaScriptRating = [5, 4, true];
  constructor() { }

  ngOnInit() {
  }

}
