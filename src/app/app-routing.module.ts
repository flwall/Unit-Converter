import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversionsComponent } from './conversions/conversions.component';

const routes: Routes = [
  {
    path: '',

    children: [
      { path: 'length-conversions', component: ConversionsComponent, data: { unit: 'lengths' } },
      { path: 'mass-conversions', component: ConversionsComponent, data: { unit: 'mass' } },
      { path: 'area-conversions', component: ConversionsComponent, data: { unit: 'area' } },
      { path: 'volume-conversions', component: ConversionsComponent, data: { unit: 'volume' } }
    ]

  },
  {
    path: '',
    component: ConversionsComponent,
    data: { unit: 'home' }

  },
  {
    path: '**',
    redirectTo: ''
  }

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
/*

  { path: 'length-conversions', component: ConversionsComponent },
  { path: 'mass-conversions', component: MassConversionsComponent },
  { path: 'area-conversions', component: AreaConversionsComponent }

 */
