import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-radio',
  templateUrl: './my-radio.component.html',
  styleUrls: ['./my-radio.component.scss']
})
export class MyRadioComponent implements OnInit {
  @Input() Name: string = "";
  @Input() Label: string = "";
  @Input() Value: number = 0;
  @Input() Object: any;
  @Input() ObjectValue: string = "value";

  public get ngModel() {
    return this.Object?.[this.ObjectValue];
  }
  public set ngModel(value: number) {
    this.Object[this.ObjectValue] = value
  }
  constructor() { }

  ngOnInit(): void {
  }

}
