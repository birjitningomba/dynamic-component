import { Injectable } from '@angular/core';
import { ChipData } from '../model/chip-data'

@Injectable()
export class ChipDataService {
  
  public chipDataShared: ChipData;

  constructor() { 
    this.chipDataShared = { name: '', flavour: '' }
  }
}