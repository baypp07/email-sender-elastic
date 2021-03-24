import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { SendemailService} from './sendemail.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [SendemailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
