import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'maskingPhone'
})
export class MaskingPhonePipe implements PipeTransform {
    
    transform(value: any) {
        let startNum = value.slice(0, 2);
        let midNum = value.slice(3, 4);
        let endNum = value.slice(-2);
        value = `${startNum}**${midNum}***${endNum}`;
        return value;
    }
}