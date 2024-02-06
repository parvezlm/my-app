import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/service/data-service";

@Component({
    selector: 'app-pure-impure',
    templateUrl: './pure-impure-pipe.component.html',
    styleUrls: ['./pure-impure-pipe.component.scss']
})
export class PureImpurePipe implements OnInit {
    public students: Array<any> = [];
    public filterText:string = '';

    constructor(private service: DataService) {}

    ngOnInit(): void {
        this.students = this.service.students;
    }

    addStudent() {
        let studentCopy:Array<any> = Object.assign([], this.students);
        studentCopy.push({ name: 'rose', marks: '350', rollNo: '345432', age: 20 , gender: 'female'});
        this.students = studentCopy;
        // this.students.push({ name: 'rose', marks: '350', rollNo: '345432', age: 20 , gender: 'female'})
    }

    changeGender() {
        let studentCopy:Array<any> = Object.assign([], this.students);
        studentCopy[0].gender = 'female';
        this.students = studentCopy;
        // this.students[0].gender = 'female'
    }

}
