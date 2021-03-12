import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {
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
