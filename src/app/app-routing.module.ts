import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleFormComponent } from './example-form/example-form.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
