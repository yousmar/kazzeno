import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAreaComponent } from './header-area/header-area.component';
import { ServiceAreaComponent } from './service-area/service-area.component';
import { NavbarAreaComponent } from './navbar-area/navbar-area.component';
import { FooterAreaComponent } from './footer-area/footer-area.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';




const routes: Routes = [
  {path : '', redirectTo : '/accueil', pathMatch: 'full'},
  {path : '', component : PublicComponent,
    children : [
      {path : 'accueil', component : HomepageComponent},
    ]
  }
];





@NgModule({
  declarations: [PublicComponent, HeaderAreaComponent, ServiceAreaComponent, NavbarAreaComponent, FooterAreaComponent, HomepageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class PublicModule { }
