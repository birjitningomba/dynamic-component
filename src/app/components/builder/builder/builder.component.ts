import { Component, OnInit, Injectable, ViewChild,ViewContainerRef } from '@angular/core';
import { FactoryService } from '../../../service/factory.service';
import { ChipDataService } from '../../../service/chip-data.service';
import { PotatoComponent } from '../../chips/potato/potato.component';
import { ChipData } from '../../../model/chip-data';
import { ContainerService } from '../../../service/container.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  @ViewChild('containerEditing', {read: ViewContainerRef}) containerEditing: ViewContainerRef;

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  @ViewChild(PotatoComponent) potatoComponent: PotatoComponent;

  index: number;
  selectedChipComponent: string;
  selectedChip: string;
  compInstance: any;
  componentList: any[];

  constructor(private _factoryService:FactoryService, 
  private _chipDataService: ChipDataService, 
  private _containerService: ContainerService) { }

  ngOnInit() {
    this.index = 0;
    this.componentList = [];
    this._containerService.container = this.container;
  }

  Load() {
     this.containerEditing.clear();
     let chipData = {chipName: '', chipFlavour: ''}
     this.compInstance = this._factoryService.InsertComponent(this.containerEditing,PotatoComponent, chipData, true, 0).instance;
  }

  Add() {

       Object.keys(this.compInstance.potatoFormGroup.controls).map( function(e) {   
        this.compInstance.potatoFormGroup.controls[eval( "\"" + e  + "\"")].markAsDirty();
        this.compInstance.potatoFormGroup.controls[eval( "\"" + e  + "\"")].markAsTouched();
        this.compInstance.potatoFormGroup.controls[eval( "\"" + e  + "\"")].updateValueAndValidity();      
       // console.log(eval( "\"" + e  + "\""));
       }, this)

     if(this.compInstance.potatoFormGroup.valid) {
        this.containerEditing.clear();
        this._chipDataService.chipDataShared.chipIndex = this.index;
        this.compInstance = this._factoryService.InsertComponent(this.container,PotatoComponent, this._chipDataService.chipDataShared, false, this.index);
        this.compInstance.instance._ref = this.compInstance;
        this.index --;
       this.componentList.push(this._chipDataService.chipDataShared);
       console.log(JSON.stringify(this.componentList));
     }
  }

    todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      // moveItemInArray(
      //   event.container.data, 
      //   event.previousIndex, 
      //   event.currentIndex
      //);
    } else {
     // transferArrayItem(
        // event.previousContainer.data,
        // event.container.data,
        // event.previousIndex,
        // event.currentIndex
       // );
    }
  }
}