import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DonutDetailsComponent } from './components/donut-details/donut-details.component';
import { DonutListComponent } from './components/donut-list/donut-list.component';

const routes: Routes = [
  { path: "cart", component: CartComponent },
  // :id is a variable in the URL which can have different values
  { path: "details/:id", component: DonutDetailsComponent },
  // without pathMatch: full, this would match anything starting with details/
  { path: "details", pathMatch: "full", redirectTo: "/" },
  { path: "", component: DonutListComponent }, // the root path (homepage)
  { path: "**", component: NotFoundComponent } // ** wildcard catches all
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
