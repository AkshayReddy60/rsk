import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AWSComponent } from './aws/aws.component';
import { LinuxComponent } from './linux/linux.component';
import { SalesforceComponent } from './salesforce/salesforce.component';
import { AzureComponent } from './azure/azure.component';
import { FrontendComponent } from './frontend/frontend.component';
import { ClickComponent } from './click/click.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"aws",component:AWSComponent},
  {path:"linux",component:LinuxComponent},
  {path:"salesforce",component:SalesforceComponent},
  {path:"azure",component:AzureComponent},
  {path:"frontend",component:FrontendComponent},
  {path:"click",component:ClickComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
