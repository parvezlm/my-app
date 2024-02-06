import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filterStudent',
    // pure: false
})
export class FilterPipe implements PipeTransform {
    transform(students: Array<any>, filterText: string) {
        if (students.length === 0 || filterText.length === 0) {
            return students;
        } else {
            return students.filter(student => {
                return student.gender.toLowerCase() === filterText.toLowerCase();
            });
        }
    }
}