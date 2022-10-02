export class DataListOptions {
  value: string = "";
  label: string = "";
  constructor(value: string, label: string) {
    this.value = value;
    this.label = label;
  }
  static CreateOnValueArray(arr: string[]): DataListOptions[] {
    let DataListOptionsArr: DataListOptions[] = new Array();
    arr.forEach((item) => DataListOptionsArr.push(new DataListOptions(item, "")));
    return DataListOptionsArr;
  }
}
