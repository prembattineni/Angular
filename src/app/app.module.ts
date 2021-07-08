import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PremComponent } from './prem/prem.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StructDirectivesComponent } from './struct-directives/struct-directives.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProductsComponent } from './products/products.component';
import { AttributeDirsComponent } from './attribute-dirs/attribute-dirs.component';
import { MycolorDirective } from './directives/mycolor.directive';
import { PipesComponent } from './pipes/pipes.component';
import { MyuppercasePipe } from './mypipes/myuppercase.pipe';
import { SearchpipePipe } from './custompipes/searchpipe.pipe';
import { FilterpipePipe } from './custompipes/filterpipe.pipe';
import { ReversepipePipe } from './custompipes/reversepipe.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Calculator1Component } from './calculator1/calculator1.component';
import { TitlecasePipe } from './mypipes/titlecase.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { First1Component } from './first1/first1.component';
import { Second1Component } from './second1/second1.component';
import { JavaComponent } from './modules/java/java.component';
import { WebComponent } from './modules/web/web.component';
import { routingComponents, TechRoutingModule } from './tech-routing/tech-routing.module';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactFormsComponent } from './react-forms/react-forms.component';
import { ReactForms1Component } from './react-forms1/react-forms1.component';
import { TemplateDrivenForm1Component } from './template-driven-form1/template-driven-form1.component';
import { Searchpipe1Pipe } from './custompipes/searchpipe1.pipe';
import { Filterpipe1Pipe } from './custompipes/filterpipe1.pipe';
import { Java1Component } from './modules/java1/java1.component';
import { Java2Component } from './modules/java2/java2.component';
import { Web1Component } from './modules/web1/web1.component';
import { Web2Component } from './modules/web2/web2.component';

@NgModule({
  declarations: [
    AppComponent,
    PremComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    StructDirectivesComponent,
    CalculatorComponent,
    ProductsComponent,
    AttributeDirsComponent,
    MycolorDirective,
    PipesComponent,
    MyuppercasePipe,
    SearchpipePipe,
    FilterpipePipe,
    ReversepipePipe,
    Calculator1Component,
    TitlecasePipe,
    ParentComponent,
    ChildComponent,
    Parent1Component,
    Child1Component,
    FirstComponent,
    SecondComponent,
    First1Component,
    Second1Component,
    JavaComponent,
    WebComponent,
    TemplateDrivenFormComponent,
    ReactFormsComponent,
    ReactForms1Component,
    TemplateDrivenForm1Component,
    Searchpipe1Pipe,
    Filterpipe1Pipe,
    Java1Component,
    Java2Component,
    Web1Component,
    Web2Component,

  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,TechRoutingModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
