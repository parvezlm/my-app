import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'maskingEmail'
})
export class MaskingEmailPipe implements PipeTransform {
    transform(value: any) {
        let arr = value.split('@');
        let mask = '';
        for (let i = 2; i <= arr[0].length - 3; i++) {
            mask += '#';
        }
        value = `${value.slice(0, 2)}${mask}${arr[0].slice(-2)}@${arr[1]}`;
        return value;
    }
}
