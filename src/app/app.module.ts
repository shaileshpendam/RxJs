import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './include/header/header.component';
import { PromiseComponent } from './include/promise/promise.component';
import { ObservableComponent } from './include/observable/observable.component';
import { AllComponent } from './include/observable/all/all.component';
import { FormEventComponent } from './include/observable/form-event/form-event.component';
import { MapComponent } from './include/observable/map/map.component';
import { PluckComponent } from './include/observable/pluck/pluck.component';
import { FilterComponent } from './include/observable/filter/filter.component';
import { TabComponent } from './include/observable/tab/tab.component';
import { SubjectComponent } from './include/observable/subject/subject.component';
import { Comp1Component } from './component/comp1/comp1.component';
import { Comp2Component } from './component/comp2/comp2.component';
import { Comp3Component } from './component/comp3/comp3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    AllComponent,
    FormEventComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TabComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
