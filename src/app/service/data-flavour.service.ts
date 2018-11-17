import { Injectable } from '@angular/core';

@Injectable()
export class DataFlavourService {

  flavours: any[];

  constructor() {
    this.flavours = ['Orange','Apple']
   }

}