import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LengthConversionsComponent } from './length-conversions/length-conversions.component';
import { MassConversionsComponent } from './mass-conversions/mass-conversions.component';
import { AreaConversionsComponent } from './area-conversions/area-conversions.component';

const routes: Routes = [

  { path: 'length-conversions', component: LengthConversionsComponent },
  { path: 'mass-conversions', component: MassConversionsComponent },
  { path: 'area-conversions', component: AreaConversionsComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/*
,
  { path: '**', redirectTo: '/' }

*/
