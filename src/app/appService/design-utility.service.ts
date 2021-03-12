import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {
  public exclusive = new Subject<boolean>();
  public username = new BehaviorSubject<string>('shailesh');
  constructor() { }

  print(val , containerID){
   let el = document.createElement('li');
   el.innerText = val;
   document.getElementById(containerID).appendChild(el)
  }






}
