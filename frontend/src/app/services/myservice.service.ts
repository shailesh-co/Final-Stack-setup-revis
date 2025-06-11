import { Injectable } from '@angular/core';
import { BehaviorSubject, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  paraentmsg ="from appcomponent to chield";

  private myobs= new BehaviorSubject<string>("sdnsjdhjsd");
  currentMessage = this.myobs.asObservable();
  constructor() { }

 changeMessage(newMessage: string) {
    this.myobs.next(newMessage);
  }
}
