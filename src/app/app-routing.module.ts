import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { WallazuluComponent } from './components/wallazulu/wallazulu.component';
import { WallaosintComponent } from './components/wallaosint/wallaosint.component';
import { GeitsuComponent } from './components/geitsu/geitsu.component';
import { ContactComponent } from './components/contact/contact.component';
import { NosotrosWallazuluComponent } from './components/nosotros-wallazulu/nosotros-wallazulu.component';
import { ConsultaDatosComponent } from './components/consulta-datos/consulta-datos.component';
import { DatosNacionalesComponent } from './components/consulta-datos/datos-nacionales/datos-nacionales.component';
import { OtrosDatosComponent } from './components/consulta-datos/otros-datos/otros-datos.component';
import { SecurityTechComponent } from './components/security-tech/security-tech.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/wallazulu',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      { path: 'wallazulu', component: WallazuluComponent },
      { path: 'nosotros-wallazulu', component: NosotrosWallazuluComponent},
      { path: 'wallaosint', component: WallaosintComponent },
      { path: 'consulta-datos', component: ConsultaDatosComponent },
      { path: 'consulta-datos/nacionales', component: DatosNacionalesComponent },
      { path: 'consulta-datos/otros', component: OtrosDatosComponent },
      { path: 'geitsu', component: GeitsuComponent },
      { path: 'security-tech', component: SecurityTechComponent },
      { path: 'contact', component: ContactComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
