import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public accessToken: string;
  public name: string;

  constructor() { }

  public destroy() {
    this.accessToken = null;
    this.name = null;
  }
}