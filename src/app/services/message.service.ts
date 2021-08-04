import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  constructor() { }

  add(mssg:string){
    this.messages.push(mssg)
  }
  clear(){
    this.messages = [];
  }
}
