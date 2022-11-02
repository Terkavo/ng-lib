import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-textarea',
  templateUrl: './my-textarea.component.html',
  styleUrls: ['./my-textarea.component.scss']
})
export class MyTextareaComponent implements OnInit {
  private _Value: string;
  public get Value(): string {
    return this._Value;
  }
  public set Value(value: string) {
    this._Value = value;
    this.MyNgModelChange.emit(value)
  }
  @Input() public set MyNgModel(value: string) {
    this._Value = value
  }
  @Output() MyNgModelChange = new EventEmitter<string>();
  constructor() { }
  @Input() public Label: string = "";
  ngOnInit(): void {
  }

}
