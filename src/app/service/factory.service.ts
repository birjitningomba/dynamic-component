import { Injectable, ComponentFactoryResolver, ComponentRef, ViewContainerRef } from '@angular/core';


@Injectable()
export class FactoryService {

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

  public InsertComponent(container:ViewContainerRef, component, chipData, editing, index) {
           const componentFactory = this._componentFactoryResolver.resolveComponentFactory(component);
           const componentRef = container.createComponent(componentFactory, index);
           componentRef.instance.chipData = chipData;
           componentRef.instance.editing = editing;     
           console.log('Component Created at Index: ' + index);
           return componentRef;

  }
// this._factoryService.MoveComponent(shift,this._ref, this._containerService.container);

    // const currentIndex = this._containerService.container.indexOf(this._ref.hostView);
    // const len = this._containerService.container.length;

    // let destinationIndex = currentIndex + shift;
    // if (destinationIndex === len) {
    //   destinationIndex = 0;
    // }
    // if (destinationIndex === -1) {
    //   destinationIndex = len - 1;
    // }

    // this._containerService.container.move(this._ref.hostView, destinationIndex);

    MoveComponent(shift: number, _ref:any, container: any) {
    const currentIndex = container.indexOf(_ref.hostView);
    const len = container.length;

    let destinationIndex = currentIndex + shift;
    if (destinationIndex === len) {
      destinationIndex = 0;
    }
    if (destinationIndex === -1) {
      destinationIndex = len - 1;
    }

    container.move(_ref.hostView, destinationIndex);
}

}