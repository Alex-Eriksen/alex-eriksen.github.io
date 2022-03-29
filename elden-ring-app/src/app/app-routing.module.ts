import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './components/add-equipment/add-item.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "add-equipment", component: AddItemComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
