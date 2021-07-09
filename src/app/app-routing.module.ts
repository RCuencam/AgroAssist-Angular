import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFarmerComponent } from './pages/add-farmer/add-farmer.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'farmers/new', component:AddFarmerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
