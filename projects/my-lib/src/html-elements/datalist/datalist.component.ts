import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataListOptions } from './DataListOptions';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.scss']
})
export class DatalistComponent implements OnInit, OnDestroy {
  @Input() EventSetFocus: Observable<void> | undefined;
  private CorrectOptions: DataListOptions[] = new Array
  public RealOptions: DataListOptions[] = new Array
  private _Options: DataListOptions[] = new Array;
  public get Options(): DataListOptions[] {
    return this._Options;
  }
  @Input() public set Options(value: DataListOptions[] | string[]) {
    if (typeof value[0] === "string")
      value = DataListOptions.CreateOnValueArray(<string[]>value);
    this._Options = <DataListOptions[]>value;
  }
  @Input() Placeholder: string = ""

  //Output
  @Output("myInput") InputForOutput = new EventEmitter<MyDataListInputEvent>();

  @Input() public set MyNgModel(value: string | null) {
    this.Value = value
  }
  @Output() MyNgModelChange = new EventEmitter<string>();
  //html
  private readonly html: HTMLElement = <HTMLElement>document.querySelector("html");
  @ViewChild('items') el: ElementRef<HTMLElement>;
  @ViewChild('input') Input: ElementRef<HTMLInputElement>;
  //value
  private _Value: string = "";
  @Input() set Value(value: string | null) {
    if (value === this._Value)
      return
    if (value === null)
      this._Value = ""
    else
      this._Value = value
    this.updateCorrectOptions()
    this.runFullComplianceCheck()
  }
  get Value() {
    return this._Value;
  }
  onClickHtml = (e: Event) => {
    let clickOnUl = false;
    let path = e.composedPath()
    if (e.target === this.Input.nativeElement)
      clickOnUl = true;
    path.forEach(element => {
      if (clickOnUl == true)
        return;
      let hTMLElement = element as HTMLElement
      if (hTMLElement.classList == undefined)
        return;
      hTMLElement.classList.forEach(element => {
        if (element === "datalist-ul")
          clickOnUl = true;
        if (element === "not-hide-datalist-list-on-click")
          clickOnUl = true;
      });
    });
    if (clickOnUl)
      return
    this.el.nativeElement.classList.remove("active");
    this.runFullComplianceCheck()
  }
  constructor() {
  }
  ngOnInit(): void {
    this.html.addEventListener("mousedown", this.onClickHtml)
    this.EventSetFocus?.subscribe(() => {
      this.SetFocus();
    });
    this.runFullComplianceCheck()
  }
  SetFocus() {
    this.Input.nativeElement.focus();
  }
  ngOnDestroy(): void {
    this.html.removeEventListener("click", this.onClickHtml)
  }
  onFocus() {
    this.el?.nativeElement.classList.add("active");
    this.updateCorrectOptions()
    this.onScrollUl()
  }
  updateCorrectOptions() {
    this.CorrectOptions = new Array()
    for (let index = 0; index < this.Options.length; index++) {
      const element = this.Options[index];
      if (element.label.toLowerCase().includes(this._Value.toLowerCase()))
        this.CorrectOptions.push(element)
      else if (element.value.toLowerCase().includes(this._Value.toLowerCase()))
        this.CorrectOptions.push(element)
    }
    this.RealOptions = new Array()
    for (let i = 0; i < 10; i++) {
      if (this.CorrectOptions[i] === undefined)
        break
      this.RealOptions.push(this.CorrectOptions[i])
    }
  }
  onClicItem(item: DataListOptions) {
    this._Value = item.value
    this.el?.nativeElement.classList.remove("active");
    this.runFullComplianceCheck()
  }
  runFullComplianceCheck() {
    let isCompliance = false;
    let label = null
    let opt = this.Options.find(x => x.value === this.Value)
    if (opt != undefined) {
      isCompliance = true;
      label = opt.label;
    }
    this.MyNgModelChange.emit(this._Value)
    this.InputForOutput.emit(new MyDataListInputEvent(this._Value, isCompliance, label))
  }
  onScrollUl() {
    let bottom = this.el.nativeElement.scrollHeight
    let clientHeight = this.el.nativeElement.scrollTop + 500
    if (bottom > clientHeight) return;
    for (let index = 0; index < 10; index++) {
      if (this.CorrectOptions[this.RealOptions.length] === undefined) break;
      this.RealOptions.push(this.CorrectOptions[this.RealOptions.length])
    }
  }
  OldMyNgModelValue: string;
}
export class MyDataListInputEvent {
  constructor(public Value: string, public IsCorrect: boolean, public label: string | null) { }
}