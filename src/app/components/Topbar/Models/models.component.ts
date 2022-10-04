import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'topbar-models',
  templateUrl: './models.component.html',
  styleUrls: [
    './models.component.scss'
  ]
})
export class ModelsComponent implements OnInit {
  modelsIsShow = "";

  constructor() {}

  ngOnInit(): void {
  }

  showModelsSelection () {
    if (this.modelsIsShow) {
      this.modelsIsShow = "";
    } else {
      this.modelsIsShow = "is-show";
    }
  }

}