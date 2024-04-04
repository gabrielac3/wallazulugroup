import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { WallazuluComponent } from './components/wallazulu/wallazulu.component';
import { WallaosintComponent } from './components/wallaosint/wallaosint.component';
import { GeitsuComponent } from './components/geitsu/geitsu.component';
import { ContactComponent } from './components/contact/contact.component';
import { NosotrosWallazuluComponent } from './nosotros-wallazulu/nosotros-wallazulu.component';

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
      { path: 'geitsu', component: GeitsuComponent },
      { path: 'contact', component: ContactComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
