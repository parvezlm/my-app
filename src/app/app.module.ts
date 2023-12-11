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

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PipesExampleComponent,
    FormatPhone,
    MaskingPhonePipe,
    MaskingEmailPipe,
    CreatePdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
