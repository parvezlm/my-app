import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";


@Component({
    selector: 'app-info-form',
    templateUrl: './info-form.component.html',
    styleUrls: ['./info-form.component.scss']
})
export class InfoFormComponent implements OnInit {
    public form!: FormGroup;
    public phoneArray!: FormArray;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.phoneArray = this.fb.array([]);
        this.form = this.fb.group({
            name: '',
            email: '',
            mobile: '',
            gender: '',
            mobiles: this.phoneArray
        })
    }

    get phone() {
        return this.form.controls['mobiles'] as FormArray;
    }

    addPhone() {
        const phone = this.fb.group({
            mobile: ''
        });
        this.phoneArray.push(phone);
    }

    submit(form: any) {
        console.log(form)
    }

}