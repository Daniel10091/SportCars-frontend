import { Component, OnInit } from "@angular/core";
import { Announcement } from "src/app/announcement";
import { ResultComponet } from "../Result/result.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss'
  ]
})
export class HeaderComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {
  }

  Announcement () {
    ResultComponet
  }

}