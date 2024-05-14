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
import { SwitchmapComponent } from './components/rxjs/switchmap/swithcmap.component';
import { ResgisterFormComponents } from './components/form-example/resgistration-form.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './utils/http-interceptor';
import { FormatPhonePipe } from './utils/format-phone.pipe';
import { CanActivateGuard } from './auth-guard/canactivate.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { CamelCasePipe } from './pipes/camel-case.pipe';
import { CapitalAlterNateLetterPipe } from './pipes/capital-alternate-letter.pipe';

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
    RegistraionFormComponent,
    SwitchmapComponent,
    ResgisterFormComponents,
    FormatPhonePipe,
    NotFoundComponent,
    LoginComponent,
    CamelCasePipe,
    CapitalAlterNateLetterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    CanActivateGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
