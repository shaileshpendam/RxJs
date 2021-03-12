import { PluckComponent } from './include/observable/pluck/pluck.component';
import { AllComponent } from './include/observable/all/all.component';
import { ObservableComponent } from './include/observable/observable.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromiseComponent } from './include/promise/promise.component';
import { FormEventComponent } from './include/observable/form-event/form-event.component';
import { MapComponent } from './include/observable/map/map.component';
import { FilterComponent } from './include/observable/filter/filter.component';
import { TabComponent } from './include/observable/tab/tab.component';
import { SubjectComponent } from './include/observable/subject/subject.component';

const routes: Routes = [
  {path:'promise', component:PromiseComponent},
  {path:'observable', component:ObservableComponent , 
  children:[{path:'', component:AllComponent},
  {path:'formEvent', component:FormEventComponent},
  {path:'map', component:MapComponent},
  {path:'pluck', component:PluckComponent},
  {path:'filter', component:FilterComponent},
  {path:'tap', component:TabComponent},
  {path:'subject', component:SubjectComponent}]},
  {path:'**', redirectTo:'promise'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
