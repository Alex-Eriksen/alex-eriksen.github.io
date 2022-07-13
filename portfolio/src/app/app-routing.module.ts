import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { HomepageComponent } from './components/main/homepage/homepage.component';
import { OverviewComponent } from './components/main/overview/overview.component';
import { BoardComponent } from './components/todo/board/board.component';
import { WeightConverterComponent } from './components/weightConverter/weight-converter/weight-converter.component';

const routes: Routes = [
	{ path: '', component: HomepageComponent },
	{ path: 'projects', component: OverviewComponent },
	{ path: 'kanban-board', component: BoardComponent },
	{ path: 'calculator', component: CalculatorComponent },
	{ path: 'weight', component: WeightConverterComponent },

	{path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
