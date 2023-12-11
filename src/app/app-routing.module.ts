import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { PipesExampleComponent } from './components/pipes-example/pipes-example.component';
import { CreatePdfComponent } from './components/create-pdf/create-pdf.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'pipes', component: PipesExampleComponent },
  { path: 'create-pdf', component: CreatePdfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
