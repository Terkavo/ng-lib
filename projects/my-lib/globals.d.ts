export { };
declare global {
    interface Array<T> {
        СombineOnField(arr: Array<T>, field: string): void
        Exists(fn: (x: T) => boolean): boolean;
        Remove(el: T): boolean;
    }
    interface  Date  {
        FormatDDMMYYYY():string
    }
}