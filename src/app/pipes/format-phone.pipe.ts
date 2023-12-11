import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'phoneNumber'
})
export class FormatPhone implements PipeTransform {
    preFix = '+91';
    number: any;
    city: any;

    transform(value: any) {
        this.city = value.slice(0, 2);
        this.number = value.slice(2);
        value = `${this.preFix} ${this.city}-${this.number}`;
        return value;
    }
}