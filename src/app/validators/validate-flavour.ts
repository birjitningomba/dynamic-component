
import { AbstractControl } from '@angular/forms';

export function  ValidateFlavour(control: AbstractControl) {

    const validFlavours = ['Orange','Apple'];

     if (validFlavours.indexOf(control.value) > -1) {
     return null;
     }  
     return { validFlavour: true };
   }