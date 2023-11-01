import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementshomeComponent } from './elementshome/elementshome.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimesDirective } from './times.directive';


@NgModule({
  declarations: [
    ElementshomeComponent,
    PlaceholderComponent,
    TimesDirective
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
  exports: []
})
export class ElementsModule { }
