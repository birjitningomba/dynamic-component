import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PotatoComponent } from './components/chips/potato/potato.component';
import { BuilderComponent } from './components/builder/builder/builder.component';
import { FactoryService } from './service/factory.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChipDataService } from './service/chip-data.service';
import { ContainerService } from './service/container.service';
import { DataFlavourService } from './service/data-flavour.service';
import { CustomValidators } from './validators/validator.service';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, MatInputModule, MatButtonModule, MatSelectModule, MatCardModule, MatAutocompleteModule,
   CdkTableModule,
    ScrollingModule,
    CdkTreeModule,
    DragDropModule,
  
   ],
  declarations: [ AppComponent, HelloComponent, PotatoComponent, BuilderComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ FactoryService, ChipDataService, ContainerService, 
  DataFlavourService, CustomValidators ],
  entryComponents:    [ PotatoComponent, BuilderComponent ]
})
export class AppModule { }
