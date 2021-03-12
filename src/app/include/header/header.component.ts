import { DesignUtilityService } from './../../appService/design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
exclusive:boolean =false;
  constructor(private _designService:DesignUtilityService) { }

  ngOnInit(): void {
    this._designService.exclusive.subscribe((res)=>{
           this.exclusive = res ;
    })
  }

}
