// @ts-nocheck
import { ClassConstructor, ClassTransformOptions, plainToInstance } from "class-transformer";

export class Helper {
    static IsEventHasClass(event: Event, className: string): boolean {
        let targets = event.composedPath()
        for (let index = 0; index < targets.length; index++) {
            const element = <HTMLElement>targets[index];
            if (element.classList === undefined)
                continue
            for (let index = 0; index < element.classList.length; index++)
                if (element.classList[index] === className)
                    return true
        }
        return false
    }
    static plainToInstance<V>(cls: ClassConstructor<any>, plain: V[] | V, options?: ClassTransformOptions): any {
        let val = plainToInstance(cls, plain, options)
        if (Array.isArray(val))
            val.forEach(element => {
                if (typeof element.ToClass !== "undefined")
                    element.ToClass();
            });
        else
            if (typeof val.ToClass !== "undefined")
                val.ToClass();
        return val
    }
    static RandomString(length: number): string {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }
    static CreatePrototype() {
        Array.prototype.Remove = function (el: any) {
            let num;
            for (let index = 0; index < this.length; index++) {
                if (this[index] === el)
                    num = index
            }
            if (num === undefined)
                return false;
            this.splice(num, 1)
            return true;
        }
        Array.prototype.Exists = function (fn: (x: any) => boolean) {
            for (let index = 0; index < this.length; index++) {
                const element = this[index];
                if (fn(element))
                    return true;
            }
            return false;
        }
        Array.prototype.СombineOnField = function (arr: any[], field: string) {
            for (let index = 0; index < arr.length; index++) {
                const elementOtherArr = arr[index];
                let IsDoNotAdd = false;
                for (let index = 0; index < this.length; index++) {
                    const elementThisArr = this[index];
                    if (elementThisArr[field] === elementOtherArr[field]) {
                        IsDoNotAdd = true;
                        break
                    }
                }
                if (IsDoNotAdd)
                    continue
                this.push(elementOtherArr)
            }
        }
        Array.prototype.PushArray = function (arr: any[]) {
            arr.forEach(x => {
                this.push(x)
            })
        }
        Date.prototype.FormatDDMMYYYY = function () {
            let day: string | number = this.getDate()
            if (day < 10)
                day = "0" + day
            let mouth: string | number = this.getMonth() + 1
            if (mouth < 10)
                mouth = "0" + mouth
            return `${day}.${mouth}.${this.getFullYear()}`
        }
        Date.FromDDMMYYYY = function (value: string) {
            if (value.length !== 10)
                throw new Error()
            return new Date(`${value.slice(3, 5)}.${value.slice(0, 2)}.${value.slice(6, 10)}`)
        }
    }
}