import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './components/add-equipment/add-item.component';
import { DatabaseLoadComponent } from './components/database-load/database-load.component';

const routes: Routes = [
  { path: "", component: AddItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
