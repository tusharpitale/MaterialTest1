import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Custom Modules
import { MaterialModule } from './material-module';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataService } from './data/data.service';
import { PostDialogComponent } from './post-dialog/post-dialog.component';
import { MyTreeCompComponent } from './my-tree-comp/my-tree-comp.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    DialogExampleComponent,
    WelcomeComponent,
    DashboardComponent,
    PostDialogComponent,
    MyTreeCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [
    PostDialogComponent
  ],
})
export class AppModule { }
