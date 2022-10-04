import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'topbar-localization',
  templateUrl: './localizations.component.html',
  styleUrls: [
    './localizations.component.scss'
  ]
})
export class LocalizationComponent implements OnInit {
  localizationsIsActive = "";
  
  constructor() {}
  
  ngOnInit(): void {
  }
  
  showLocalizationsSelection () {
    if (this.localizationsIsActive) {
      this.localizationsIsActive = "";
    } else {
      this.localizationsIsActive = "is-show";
    }
  }
}