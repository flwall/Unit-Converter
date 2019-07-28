import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ConversionsComponent } from './conversions/conversions.component';
import { FormsModule } from '@angular/forms';
import { UnitInputComponent } from './components/unit-input/unit-input.component';
import { UnitsTableComponent } from './components/units-table/units-table.component';
import { AreaConversionsComponent } from './area-conversions/area-conversions.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ConversionsComponent,
    UnitInputComponent,
    UnitsTableComponent,
    AreaConversionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
