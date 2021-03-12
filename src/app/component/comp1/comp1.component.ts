import { DesignUtilityService } from './../../appService/design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
public userName:string;
  constructor(private _designUS:DesignUtilityService) { 
    //this is for local component value observable
    this._designUS.username.subscribe((res) =>{
       this.userName = res ;
    })
  }

  ngOnInit(): void {

  }
  onChange(userInput){
      console.log(userInput.value);
      // this will be change on global
      this._designUS.username.next(userInput.value);
  }

}
