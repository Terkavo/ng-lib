import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Autosize } from './Directive/autosize.directive';
import { HtmlForDirective } from './Directive/html-for.directive';
import { HeaderComponent } from './html-elements/header/header.component';
import { OneTwoDesignComponent } from './html-elements/one-two-design/one-two-design.component';
import { QrScannerComponent } from './html-elements/qr-scanner/qr-scanner.component';
import { DatalistComponent } from './html-elements/datalist/datalist.component';
import { MyRadioArrayComponent } from './html-elements/my-radio/my-radio-array/my-radio-array.component';
import { MyRadioComponent } from './html-elements/my-radio/my-radio.component';
import { MyRourerLinkDirective } from './Directive/my-rourer-link.directive';
import { MyInputNumberComponent } from './html-elements/my-input-number/my-input-number.component';

@NgModule({
  declarations: [
    MyRourerLinkDirective,
    Autosize,
    HtmlForDirective,
    DatalistComponent,
    HeaderComponent,
    MyRadioComponent,
    MyRadioArrayComponent,
    OneTwoDesignComponent,
    QrScannerComponent,
    MyInputNumberComponent,
    DatalistComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    MyRourerLinkDirective,
    Autosize,
    HtmlForDirective,
    DatalistComponent,
    HeaderComponent,
    MyRadioComponent,
    MyRadioArrayComponent,
    OneTwoDesignComponent,
    QrScannerComponent,
    MyInputNumberComponent,
  ]
})
export class MyInputModule { }