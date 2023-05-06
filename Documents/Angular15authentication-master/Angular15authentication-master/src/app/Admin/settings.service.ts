import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SystemSettings} from './system-settings';

@Injectable({
  providedIn: 'root'
})
export class SystemSettingsService {
  private apiUrl = 'http://localhost:8080/settings';

  constructor(private http: HttpClient) { }

  getSettings(): Observable<SystemSettings> {
    return this.http.get<SystemSettings>(this.apiUrl);
  }

  updateSettings(settings: SystemSettings): Observable<SystemSettings> {
    return this.http.put<SystemSettings>(this.apiUrl, settings);
  }

  saveSettings(settings: SystemSettings): Observable<void> {
    return this.http.put<void>(this.apiUrl, settings);
  }
}
