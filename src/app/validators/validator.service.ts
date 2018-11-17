import {Injectable} from '@angular/core';
import { AbstractControl } from '@angular/forms';
import {DataFlavourService} from '../service/data-flavour.service';


@Injectable()
export class CustomValidators {

 validFlavours: any [];

  constructor(private _dataFlavourService: DataFlavourService) {
  }

  ValidateFlavour(control: AbstractControl) {
    console.log(control.value)
   
     if (this._dataFlavourService.flavours.indexOf(control.value) > -1) {
     return null;
     }  
     return { validFlavour: true };
   }

}