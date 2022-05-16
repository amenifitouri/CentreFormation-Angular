import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { ListusersComponent } from './user/listusers/listusers.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddComponent } from './domaine/add/add.component';
import { PaysComponent } from './Pays/pays/pays.component';
import { ProfilComponent } from './Profil/profil/profil.component';
import { OrganismeComponent } from './Organisme/organisme/organisme.component';
import { FormateurComponent } from './formateur/formateur.component';
import { FormationComponent } from './formation/formation.component';


@NgModule({
  declarations: [
    AppComponent,
 
    ListusersComponent,
    AddComponent,
    PaysComponent,
    ProfilComponent,
    OrganismeComponent,
    FormateurComponent,
    FormationComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    BrowserModule,
    NgbModule,
   
    FormsModule,
   
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
