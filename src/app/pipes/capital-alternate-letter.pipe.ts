import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'capitalAlterNateLetter'
})
export class CapitalAlterNateLetterPipe implements PipeTransform {
    transform(value: string) {
        let result = '';
        const letters = value.split('');
        letters.forEach((letter, index) => {
            result += index % 2 ? letter.toUpperCase() : letter;
        });
        return result;
    }
}
