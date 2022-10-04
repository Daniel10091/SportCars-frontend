import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Announcement } from './announcement';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  private apiServerUrl = environment.appBaseUrl;

  constructor(private http: HttpClient) { }
  
  public getAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(`${this.apiServerUrl}/sportcarsapi/all`);
  }

  public addAnnouncement(announcement: Announcement): Observable<Announcement> {
    return this.http.post<Announcement>(`${this.apiServerUrl}/sportcarsapi/add`, announcement);
  }

  public updateAnnouncement(announcement: Announcement): Observable<Announcement> {
    return this.http.put<Announcement>(`${this.apiServerUrl}/sportcarsapi/update`, announcement);
  }

  public deleteAnnouncement(announcementId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/sportcarsapi/delete/${announcementId}`);
  }
}
