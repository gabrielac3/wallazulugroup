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
import { NosotrosWallazuluComponent } from './components/nosotros-wallazulu/nosotros-wallazulu.component';
import { ConsultaDatosComponent } from './components/consulta-datos/consulta-datos.component';
import { DatosNacionalesComponent } from './components/consulta-datos/datos-nacionales/datos-nacionales.component';
import { OtrosDatosComponent } from './components/consulta-datos/otros-datos/otros-datos.component';
import { HttpClientModule } from '@angular/common/http';
import { SuccessDialogComponent } from './shared/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './shared/error-dialog/error-dialog.component';
import { SecurityTechComponent } from './components/security-tech/security-tech.component';
import { MatCarouselModule } from 'ng-mat-carousel';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    WallazuluComponent,
    GeitsuComponent,
    WallaosintComponent,
    ContactComponent,
    NosotrosWallazuluComponent,
    ConsultaDatosComponent,
    DatosNacionalesComponent,
    OtrosDatosComponent,
    SuccessDialogComponent,
    ErrorDialogComponent,
    SecurityTechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MaterialModule,
    MatCarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
