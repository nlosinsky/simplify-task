import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FormConfigResp, FormTabConfig } from '../models';

@Injectable({providedIn: 'root'})
export class FormConfigDataService {
  constructor(
    private http: HttpClient
  ) {
  }

  getTabsConfig(): Observable<FormTabConfig[]> {
    return this.http.get<FormConfigResp>('/assets/data/form-config.json')
      .pipe(
        map((resp: FormConfigResp) => resp?.config?.nav_tabs || []),
        catchError(() => of([]))
      )
  }

  getTargetTab(): Observable<FormTabConfig> {
    return this.getTabsConfig()
      .pipe(
        map(resp => resp[1] || null)
      )
  }
}
