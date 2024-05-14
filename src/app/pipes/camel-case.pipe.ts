import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {
    /**
     * Converts a string to camel case
     * @param value The string to convert
     * @returns The camel cased string
     */
    transform(value: string): string {
        const words: string[] = value.split(" ");
        const camelCase: string = words.map((word: string, index: number) =>
            index ? word.charAt(0).toUpperCase() + word.slice(1) : word
        ).join("");
        return camelCase;
    }

}