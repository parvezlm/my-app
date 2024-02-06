import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { PipesExampleComponent } from './components/pipes-example/pipes-example.component';
import { FormatPhone } from './pipes/format-phone.pipe';
import { MaskingPhonePipe } from './pipes/masking-phone.pipe';
import { MaskingEmailPipe } from './pipes/masking-mail-id.pipe';
import { CreatePdfComponent } from './components/create-pdf/create-pdf.component';
import { PureImpurePipe } from './components/pure-impure-pipe/pure-impure-pipe.component';
import { FilterPipe } from './pipes/filter-text.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ContentchildComponent } from './components/content-child-decorator/content-child.component';
import { FormArrayComponent } from './components/form-array/form-array.component';
import { InfoFormComponent } from './components/info-form/info-form.component';
import { RegistraionFormComponent } from './components/registration-form/registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PipesExampleComponent,
    FormatPhone,
    MaskingPhonePipe,
    MaskingEmailPipe,
    CreatePdfComponent,
    PureImpurePipe,
    FilterPipe,
    ParentComponent,
    ChildComponent,
    ContentchildComponent,
    FormArrayComponent,
    InfoFormComponent,
    RegistraionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
