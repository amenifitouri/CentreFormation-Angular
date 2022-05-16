import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListusersComponent } from './user/listusers/listusers.component';
import { AddComponent } from './domaine/add/add.component';
import { OrganismeComponent } from './Organisme/organisme/organisme.component';
import { ProfilComponent } from './Profil/profil/profil.component';
import { PaysComponent } from './Pays/pays/pays.component';
import { FormateurComponent } from './formateur/formateur.component';
import { FormationComponent } from './formation/formation.component';
const routes: Routes = [
  {path: 'users',component:ListusersComponent},
  {path :"domaine",component:AddComponent},
  {path:"organisme",component:OrganismeComponent},
  {path:"pays",component:PaysComponent },
  {path:"profil",component:ProfilComponent },
  {path:"simpleuser",component:FormateurComponent},
  {path:"formation",component:FormationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
