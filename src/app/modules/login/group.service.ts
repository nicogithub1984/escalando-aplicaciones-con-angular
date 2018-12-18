import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface Group {
  id: string;
  value: string;
  active: boolean;
}

@Injectable()
export class GroupService {

groups = [];
  constructor(
    private http: HttpClient
  ) { }
  setGroups(list) {
    this.groups = list;
  }
  getStoredGroups() {
    return this.groups;
  }

  getGroups(): Observable<Group[]> {
    return this.http
    .get<any>(environment.endpoint.groups)
    .pipe(
      map(response => response.list)
    );
  }
}
