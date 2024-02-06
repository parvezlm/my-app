import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { PipesExampleComponent } from './components/pipes-example/pipes-example.component';
import { CreatePdfComponent } from './components/create-pdf/create-pdf.component';
import { PureImpurePipe } from './components/pure-impure-pipe/pure-impure-pipe.component';
import { ParentComponent } from './components/parent/parent.component';
import { FormArrayComponent } from './components/form-array/form-array.component';
import { InfoFormComponent } from './components/info-form/info-form.component';
import { RegistraionFormComponent } from './components/registration-form/registration-form.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'pipes', component: PipesExampleComponent },
  { path: 'create-pdf', component: CreatePdfComponent },
  { path: 'pure-impure-pipe', component: PureImpurePipe },
  { path: 'parent', component: ParentComponent },
  { path: 'form-array', component: FormArrayComponent },
  { path: 'info-form', component: InfoFormComponent },
  { path: 'registration-form', component: RegistraionFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
