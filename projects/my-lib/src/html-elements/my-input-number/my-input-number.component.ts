import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-input-number',
  templateUrl: './my-input-number.component.html',
  styleUrls: ['./my-input-number.component.scss']
})
export class MyInputNumberComponent implements OnInit {
  @ViewChild('input') InputEl: ElementRef<HTMLInputElement> | undefined;

  @Input() Placeholder: string = ""
  private _Value: number = 0;
  private _Min: number = -100000000;
  private _Max: number = 100000000;

  @Input() IsAllowFloat: boolean = false;
  public get Value(): string {
    if (this.InputEl === undefined)
      return this._Value.toString();
    if (this.InputEl.nativeElement.value === "0-" || this.InputEl.nativeElement.value === "-" ||
      this.InputEl.nativeElement.value === "-0")
      return "-"
    if (this.InputEl.nativeElement.value.replace(/[a-z]/gi, '') === this._Value + ".")
      return this.InputEl.nativeElement.value
    return this._Value.toString();
  }
  @Input() public set Value(value: string | number | null) {
    if (typeof value === "string")
      value = value.replace(",", '.')
    if (value === null || Number.isNaN(Number.parseInt(value.toString())))
      this._Value = 0;
    else {
      if (this.IsAllowFloat)
        this._Value = Number.parseFloat(value.toString());
      else
        this._Value = Number.parseInt(value.toString());
    }
    if (this._Value > this._Max)
      this._Value = this._Max
    if (this._Value < this._Min)
      this._Value = this._Min
    if (this.InputEl === undefined)
      return
    if (this._Value.toString() + "." === value && this.IsAllowFloat) {
      return
    }
    if (value === "-0" || value === "0-" || value === "-")
      return
    this.InputEl.nativeElement.value = this._Value.toString();
    this.MyNgModelChange.emit(this._Value)
    this.MyNgModelStringChange.emit(this._Value.toString())
  }
  @Input() public set Min(value: string | number) {
    this._Min = Number.parseFloat(value.toString());;
  }
  @Input() public set Max(value: string | number) {
    this._Max = Number.parseFloat(value.toString());;
  }
  @Input() public set MyNgModel(value: number) {
    this.Value = value
  }
  @Output() MyNgModelChange = new EventEmitter<number>();
  @Input() public set MyNgModelString(value: string | undefined) {
    if (value === undefined)
      this.Value = 0;
    else
      this.Value = value
  }
  @Output() MyNgModelStringChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    if (this._Value <= this._Min)
      this.Value = this._Min
    if (this._Value >= this._Max)
      this.Value = this._Max
  }

}
