import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableViewComponent } from './table-view/table-view.component';
import { CardViewComponent } from './card-view/card-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { TodosComponent } from './todos/todos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { CompAComponent } from './shared/component/comp-a/comp-a.component';
import { CompBComponent } from './shared/component/comp-b/comp-b.component';
import { CompCComponent } from './shared/component/comp-c/comp-c.component';
import { DataBindingComponent } from './shared/component/data-binding/data-binding.component';
import { TwoWayDataBindingComponent } from './shared/component/two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { StdCurdComponent } from './shared/component/std-curd/std-curd.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CompOneComponent } from './shared/component/comp-one/comp-one.component';
import { CompTwoComponent } from './shared/component/comp-two/comp-two.component';
import { Parent1Component } from './shared/Input_Output_decorator/parent1/parent1.component';
import { Child1Component } from './shared/Input_Output_decorator/child1/child1.component';
import { Parent2Component } from './shared/Input_Output_decorator/parent2/parent2.component';
import { Child2Component } from './shared/Input_Output_decorator/child2/child2.component';
import { Parent3Component } from './shared/Input_Output_decorator/parent3/parent3.component';
import { Child3Component } from './shared/Input_Output_decorator/child3/child3.component';
import { Parent4Component } from './shared/Input_Output_decorator/parent4/parent4.component';
import { Child4Component } from './shared/Input_Output_decorator/child4/child4.component';
import { Parent5Component } from './shared/Input_Output_decorator/parent5/parent5.component';
import { Child5Component } from './shared/Input_Output_decorator/child5/child5.component';
import { Parent6Component } from './shared/Input_Output_decorator/parent6/parent6.component';
import { Child6Component } from './shared/Input_Output_decorator/child6/child6.component';
import { Parent7Component } from './shared/Input_Output_decorator/parent7/parent7.component';
import { Child7Component } from './shared/Input_Output_decorator/child7/child7.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    CompAComponent,
    CompBComponent,
    CompCComponent,
    DataBindingComponent,
    TwoWayDataBindingComponent,
    StdCurdComponent,
    CompOneComponent,
    CompTwoComponent,
    Parent1Component,
    Child1Component,
    Parent2Component,
    Child2Component,
    Parent3Component,
    Child3Component,
    Parent4Component,
    Child4Component,
    Parent5Component,
    Child5Component,
    Parent6Component,
    Child6Component,
    Parent7Component,
    Child7Component,
    // TableViewComponent,
    // CardViewComponent,
    // ListViewComponent,
    // TodosComponents,
    // TodosComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatSnackBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
