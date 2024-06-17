import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AWSComponent } from './aws/aws.component';
import { LinuxComponent } from './linux/linux.component';
import { SalesforceComponent } from './salesforce/salesforce.component';
import { AzureComponent } from './azure/azure.component';
import { FrontendComponent } from './frontend/frontend.component';
import { ClickComponent } from './click/click.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AWSComponent,
    LinuxComponent,
    SalesforceComponent,
    AzureComponent,
    FrontendComponent,
    ClickComponent,
   
  ],
  imports: [
    BrowserModule,AppRoutingModule,MatToolbarModule,MatIconModule,
    MatSelectModule,MatOptionModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,
    MatRadioModule,MatGridListModule,MatCardModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
