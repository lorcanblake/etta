import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconExternalLink, IconDownload } from 'angular-feather';

const icons = [
  IconDownload,
  IconExternalLink
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports:icons
})
export class IconsModule { }
