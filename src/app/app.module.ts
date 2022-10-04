import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/Header/header.component';
import { PosterComponent } from './components/Result/Poster/poster.component';
import { ResultComponet } from './components/Result/result.component';
import { SidebarComponent } from './components/Sidebar/sidebar.component';
import { LocalizationComponent } from './components/Topbar/Localizations/localizations.component';
import { ModelsComponent } from './components/Topbar/Models/models.component';
import { SearchComponent } from './components/Topbar/Search/search.component';
import { TopbarComponent } from './components/Topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopbarComponent,
    LocalizationComponent,
    ModelsComponent,
    SearchComponent,
    SidebarComponent,
    ResultComponet,
    PosterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
