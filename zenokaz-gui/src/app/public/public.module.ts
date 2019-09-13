import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAreaComponent } from './header-area/header-area.component';
import { ServiceAreaComponent } from './service-area/service-area.component';
import { NavbarAreaComponent } from './navbar-area/navbar-area.component';
import { FooterAreaComponent } from './footer-area/footer-area.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';




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
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class PublicModule { }
