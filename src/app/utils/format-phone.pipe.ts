import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'formatPhone'
})
export class FormatPhonePipe implements PipeTransform {
    transform(value: any) {
        let formatedNumber = value;

        switch(value.length) {
            case 10:
                formatedNumber = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6);
                break;
            case 8:
                formatedNumber = value.slice(0, 2) + '-' + value.slice(2, 5) + '-' + value.slice(5);
                break;
            default: formatedNumber;
            break;

        }

        return formatedNumber;
    }
}
