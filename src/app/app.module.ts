import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './components/layout/layout.component';
import { MaterialModule } from './material/material.module';
import { WallazuluComponent } from './components/wallazulu/wallazulu.component';
import { GeitsuComponent } from './components/geitsu/geitsu.component';
import { WallaosintComponent } from './components/wallaosint/wallaosint.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NosotrosWallazuluComponent } from './nosotros-wallazulu/nosotros-wallazulu.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    WallazuluComponent,
    GeitsuComponent,
    WallaosintComponent,
    ContactComponent,
    NosotrosWallazuluComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FormsModule,
    ReactiveFormsModule,

    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
