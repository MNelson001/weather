import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Angular Mateiral imports
import { MaterialModule } from './_modules/material/material.module';

// Routing module, default on CLI build.
import { AppRoutingModule } from './app-routing.module';

// Component Imports
import { AppComponent } from './app.component';
import { MainComponent } from './_components/main/main.component';
import { ZipDialogComponent } from './_components/zip-dialog/zip-dialog.component';

// Entry component for dialog to ensure it is rendered
// to the DOK.
@NgModule({
  entryComponents: [
    ZipDialogComponent
  ],
  declarations: [
    AppComponent,
    MainComponent,
    ZipDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
