import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Announcement } from './announcement';
import { AnnouncementService } from './announcement.service';
import { Localizations } from "./constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    './components/Header/header.component.scss',
    './components/Topbar/topbar.component.scss',
    './components/Topbar/Search/search.component.scss',
    './components/Result/result.component.scss',
    './components/Result/Poster/poster.component.scss',
    './components/Announcement/announcement.component.scss'
  ]
})
export class AppComponent implements OnInit {
  public announcements: Announcement[];
  public editAnnouncement: Announcement;
  public deleteAnnouncement: Announcement;
  public showAnnouncement: Announcement;
  resultLengthText = 0;
  sortIsShow = "";
  modelsIsShow = "";
  fuelIsShow = "";
  stateIsShow = "";

  addTypeValue = "";
  addFuelValue = "";
  addStateValue = "";

  editTypeValue = "";
  editFuelValue = "";
  editStateValue = "";

  announcementModalIsShow = "";

  public localizations = Localizations;

  constructor(private announcementService: AnnouncementService) {}

  ngOnInit(): void {
    this.getAnnouncements();
  }

  public getAnnouncements (): void {
    this.announcementService.getAnnouncements().subscribe(
      (response: Announcement[]) => {
        this.announcements = response;
        this.resultLengthText = response.length;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  
  // public getLocalizations (): void {
  //   const localizationContainer = document.querySelector('.car-localization-selection-menu-content');
  //   let locationItem: any;
    
  //   for (let loct = 0; loct < Localizations.length; loct++) {
  //     const location = Localizations[loct];
      
  //     locationItem = `
  //       <li class="menu-option" data-toggle="Los Angeles, United States" data-id="${location.id}">
  //         <label>${location.city}, ${location.state}</label>
  //       </li>
  //     `;
  //     localizationContainer.innerHTML += locationItem;
  //   } 
  // }

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
        button.setAttribute('data-target', '#editAnnouncementModal');
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

  typeSelectModalAdd (option: string) {
    const selectedTitle = document.getElementById('typeSelectedTitleModalAdd');

    selectedTitle.innerHTML = option;
    this.addTypeValue = option;
  }

  typeSelectModalEdit (option: string) {
    const selectedTitle = document.getElementById('typeSelectedTitleModalEdit');

    selectedTitle.innerHTML = option;
    this.editTypeValue = option;
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

  fuelSelectModalAdd (option: string) {
    const selectedTitle = document.getElementById('fuelSelectedTitleModalAdd');

    selectedTitle.innerHTML = option;
    this.addFuelValue = option;
  }

  fuelSelectModalEdit (option: string) {
    const selectedTitle = document.getElementById('fuelSelectedTitleModalEdit');

    selectedTitle.innerHTML = option;
    this.editFuelValue = option;
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

  stateSelectModalAdd (option: string) {
    const selectedTitle = document.getElementById('stateSelectedTitleModalAdd');

    selectedTitle.innerHTML = option;
    this.addStateValue = option;
  }

  stateSelectModalEdit (option: string) {
    const selectedTitle = document.getElementById('stateSelectedTitleModalEdit');

    selectedTitle.innerHTML = option;
    this.editStateValue = option;
  }

  public onAddAnnouncement (addForm: NgForm): void {
    document.getElementById('add-announce-form').click();
    this.announcementService.addAnnouncement(addForm.value).subscribe(
      (response: Announcement) => {
        console.log(response);
        this.getAnnouncements();
        addForm.reset();
        this.addTypeValue = "";
        this.addFuelValue = "";
        this.addStateValue = "";
        this.editTypeValue = "";
        this.editFuelValue = "";
        this.editStateValue = "";
        document.getElementById('typeSelectedTitleModalAdd').innerHTML = "Select type";
        document.getElementById('typeSelectedTitleModalEdit').innerHTML = "Select type";
        document.getElementById('fuelSelectedTitleModalAdd').innerHTML = "Select fuel";
        document.getElementById('fuelSelectedTitleModalEdit').innerHTML = "Select fuel";
        document.getElementById('stateSelectedTitleModalAdd').innerHTML = "Select state";
        document.getElementById('stateSelectedTitleModalEdit').innerHTML = "Select state";
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    )
  }

  public onUpdateAnnouncement (announcement: Announcement): void {
    this.announcementService.updateAnnouncement(announcement).subscribe(
      (response: Announcement) => {
        console.log(response);
        this.getAnnouncements();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onDeleteAnnouncement (announcementId: number): void {
    this.announcementService.deleteAnnouncement(announcementId).subscribe(
      (response: void) => {
        console.log(response);
        this.getAnnouncements();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public searchAnnouncements (key: string): void {
    console.log(key);
    const results: Announcement[] = [];
    for (const announcement of this.announcements) {
      if (announcement.brand.toLowerCase().indexOf(key.toLowerCase()) !== -1 
       || announcement.model.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(announcement);
        this.resultLengthText = results.length;
      }
    }
    this.announcements = results;
    if (results.length === 0 || !key) {
      this.getAnnouncements();
    }
  }

  public showAnnouncementModal (announcement: Announcement): void {
    if (this.announcementModalIsShow) {
      this.announcementModalIsShow = "";
    } else {
      this.announcementModalIsShow = "is-show";
      this.showAnnouncement = announcement;
    }
  }

  public closeAnnouncementModal () {
    this.announcementModalIsShow = "";
    document.querySelector('.announcement-container').scroll({top: 0});
  }

}
