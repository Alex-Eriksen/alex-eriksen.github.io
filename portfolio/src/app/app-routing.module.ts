import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/main/homepage/homepage.component';
import { OverviewComponent } from './components/main/overview/overview.component';
import { BoardComponent } from './components/todo/board/board.component';

const routes: Routes = [
	{ path: '', component: HomepageComponent },
	{ path: 'projects', component: OverviewComponent },
	{ path: 'kanban-board', component: BoardComponent },

	{path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
