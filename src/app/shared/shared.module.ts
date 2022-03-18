import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatBytesPipe } from './pipes/format-bytes.pipe';



@NgModule({
  declarations: [
    FormatBytesPipe
  ],
  exports: [
    FormatBytesPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
