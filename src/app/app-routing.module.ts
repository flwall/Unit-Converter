import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LengthConversionsComponent } from './length-conversions/length-conversions.component';

const routes: Routes = [

  { path: 'length-conversions', component: LengthConversionsComponent },
  { path: '**', redirectTo: '/' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
