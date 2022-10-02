import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-radio-array',
  templateUrl: './my-radio-array.component.html',
  styleUrls: ['./my-radio-array.component.scss']
})
export class MyRadioArrayComponent implements OnInit {
  @Input() Name: string = "";
  @Input() LabelArray: string[];
  Object: any={
    parent:MyRadioArrayComponent,
    get value(){
      return this.parent.MyNgModel
    },
    set value(value:number){
      this.parent.MyNgModelChange.emit(value)
    }
  };

  @Input() MyNgModel: number|null;
  @Output() MyNgModelChange = new EventEmitter<number|null>();
  constructor(  ) {this.Object.parent=this; }

  ngOnInit(): void {
  }

}
