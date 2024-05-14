import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { debounceTime, delay, distinctUntilChanged, fromEvent, map, of, pluck, switchMap } from "rxjs";
import { DataService } from "src/app/service/data-service";

@Component({
    selector: 'app-pure-impure',
    templateUrl: './pure-impure-pipe.component.html',
    styleUrls: ['./pure-impure-pipe.component.scss']
})
export class PureImpurePipe implements OnInit, AfterViewInit {
    public students: Array<any> = [];
    public filterText:string = '';
    public todos: any = [];
    @ViewChild('searchForm') searchForm!: NgForm;
    form!: FormGroup;
    private route = inject(ActivatedRoute);


    constructor(private service: DataService, private fb: FormBuilder) {}

    ngOnInit(): void {
        this.students = this.service.students;
        this.getData('/todos');
        this.form = this.fb.group({
            
        });
        // this.route.params.subscribe()
    }

    ngAfterViewInit() {
        // const dataSource = this.searchForm.valueChanges;
        // dataSource?.pipe(
        //     pluck('item'),
        //     debounceTime(500),
        //     distinctUntilChanged(),
        //     switchMap(arr => this.getRes(arr))  
        // ).subscribe(res => {
        //     console.log(res)
        // })
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

    getData(url: string) {
        this.service.getData(url).subscribe((res: any) => {
            this.todos = res;
        })
    }

    getRes(data: any) {
        return of('this is tutorial of ' + data).pipe(delay(1000));
    }

    getPosts(url: string) {
        this.service.getPosts(url).subscribe(res => {
            console.log(res)
        })
    }

}
