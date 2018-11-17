import { Component, OnInit, Input, ViewChild, Output, EventEmitter, Inject, ComponentRef, HostBinding } from '@angular/core';
import { ChipDataService } from '../../../service/chip-data.service'
import { ChipData } from '../../../model/chip-data';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BuilderComponent } from '../../builder/builder/builder.component';
import { ContainerService } from '../../../service/container.service';
import { FactoryService } from '../../../service/factory.service';
import { DataFlavourService } from '../../../service/data-flavour.service';
import { ValidateFlavour } from '../../../validators/validate-flavour';
import { CustomValidators }from '../../../validators/validator.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-potato',
  templateUrl: './potato.component.html',
  styleUrls: ['./potato.component.css'],
})


export class PotatoComponent implements OnInit {


  @Input() editing : boolean;
  @Input() chipData : ChipData;

  flavours: any[];

  newChipData: ChipData;

  potatoFormGroup: FormGroup;

  _ref:ComponentRef<any>;

  constructor(
     private _factoryService:FactoryService,
     private _containerService: ContainerService,
     private _dataFlavourService: DataFlavourService,
     private _chipDataService: ChipDataService,
     private _customValidators: CustomValidators,
     private _formBuilder: FormBuilder) { 
      this.potatoFormGroup = this.createFormGroup(_formBuilder);
  }


  ngOnInit() {
      this._chipDataService.chipDataShared = null;
      this.flavours = this._dataFlavourService.flavours;
      
  }


  prepareChipData() {
    const chipData = new ChipData();
    chipData.chipName = this.potatoFormGroup.value.chipName;
    chipData.chipFlavour = this.potatoFormGroup.value.chipFlavour;

    this.newChipData = chipData;
    this._chipDataService.chipDataShared = this.newChipData;
  }

createFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group({
      chipName:    ['', Validators.required ],
      chipFlavour:  ['', 
      [ Validators.required , this._customValidators.ValidateFlavour.bind(this)] ],
    });
  }

  Move(shift: number) {
    this._factoryService.MoveComponent(shift,this._ref, this._containerService.container);
  }


  get chipName() {
    return this.potatoFormGroup.get('chipName');
  }

  get chipFlavour() {
    return this.potatoFormGroup.get('chipFlavour');
  }

    drop(event: CdkDragDrop<string[]>) {
   console.log('Dropped!');
  }

}