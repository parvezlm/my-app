import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";


@Component({
    selector: 'app-form-array',
    templateUrl: './form-array.component.html',
    styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {
    public countries: Array<any> = [
        'India',
        'USA',
        'England',
        'Russia',
        'Srilanka',
        'Afghanistan'
    ];
    public form!: FormGroup;
    public addressFormArray!: FormArray;

    constructor(private fb: FormBuilder) {

    }

    ngOnInit(): void {
        this.addressFormArray = this.fb.array([]);
        this.form = this.fb.group({
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            country: '',
            zipcode: '',
            addressLines: this.addressFormArray
        })
    }

    get addressLine()  {
        return this.form.controls['addressLines'] as FormArray;
    }


    addAddressLine() {
        const addressLine = this.fb.group({
            addressLine: ''
        });
        this.addressLine.push(addressLine)
    }

    remove(index: number) {
        this.addressFormArray.removeAt(index)
    }

    submit(form: any) {
        console.log(form)
    }

}