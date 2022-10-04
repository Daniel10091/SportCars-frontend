import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Announcement } from "src/app/announcement";
import { AnnouncementService } from "src/app/announcement.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: [
    './result.component.scss'
  ]
})
export class ResultComponet implements OnInit {
  public announcements: Announcement[];
  public editAnnouncement: Announcement;
  public deleteAnnouncement: Announcement;
  sortIsShow = "";
  modelsIsShow = "";
  fuelIsShow = "";
  stateIsShow = "";
  
  constructor(private announcementService: AnnouncementService) {}

  ngOnInit(): void {
    this.getAnnouncement();
  }

  public getAnnouncement (): void {
    this.announcementService.getAnnouncements().subscribe(
      (response: Announcement[]) => {
        this.announcements = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  showSortSelection () {
    if (this.sortIsShow) {
      this.sortIsShow = "";
    } else {
      this.sortIsShow = "is-show";
    }
  }
  
  public onOpenModal(announcement: Announcement, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');

    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    switch (mode) {
      case 'add':
        button.setAttribute('data-target', '#addAnnouncementModal');
        break;
      case 'edit':
        this.editAnnouncement = announcement;
        button.setAttribute('data-target', '#updateAnnouncementModal');
        break;
      case 'delete':
        this.deleteAnnouncement = announcement;
        button.setAttribute('data-target', '#deleteAnnouncementModal');
        break;
    }
    container.appendChild(button);
    button.click();
  }

  showModelsSelection () {
    this.fuelIsShow = "";
    this.stateIsShow = "";
    
    if (this.modelsIsShow) {
      this.modelsIsShow = "";
    } else {
      this.modelsIsShow = "is-show";
    }
  }

  typeSelect (option: string) {
    const selectedTitle = document.getElementById('typeSelectedTitle');
    const selectedValue = document.getElementById('typeSelectedValue');

    selectedTitle.innerHTML = option;
    selectedValue.ariaValueText = option;
  }

  showFuelSelection () {
    this.modelsIsShow = "";
    this.stateIsShow = "";

    if (this.fuelIsShow) {
      this.fuelIsShow = "";
    } else {
      this.fuelIsShow = "is-show";
    }
  }

  fuelSelect (option: string) {
    const selectedTitle = document.getElementById('fuelSelectedTitle');
    const selectedValue = document.getElementById('fuelSelectedValue');

    selectedTitle.innerHTML = option;
    selectedValue.ariaValueText = option;
  }

  showStateSelection () {
    this.modelsIsShow = "";
    this.fuelIsShow = "";

    if (this.stateIsShow) {
      this.stateIsShow = "";
    } else {
      this.stateIsShow = "is-show";
    }
  }

  stateSelect (option: string) {
    const selectedTitle = document.getElementById('stateSelectedTitle');
    const selectedValue = document.getElementById('stateSelectedValue');

    selectedTitle.innerHTML = option;
    selectedValue.ariaValueText = option;
  }
}