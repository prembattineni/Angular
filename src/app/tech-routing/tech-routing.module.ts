import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from '../modules/web/web.component';
import { JavaComponent } from '../modules/java/java.component';
import { Java1Component } from '../modules/java1/java1.component';
import { Java2Component } from '../modules/java2/java2.component';
import { Web1Component } from '../modules/web1/web1.component';
import { Web2Component } from '../modules/web2/web2.component';

const routes:Routes = [
  {path:'web', component:WebComponent,
  children : [
    {path:'web1', component:Web1Component },
    {path:'web2', component: Web2Component},
   ]
 },
  {path:'java', component:JavaComponent, children : [
    {path:'java1', component:Java1Component },
    {path:'java2', component: Java2Component},
   ]
 }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class TechRoutingModule { }
export const routingComponents = [WebComponent,JavaComponent,Web1Component,Web2Component,Java1Component,Java2Component]
