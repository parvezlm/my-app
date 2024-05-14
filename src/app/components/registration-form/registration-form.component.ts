import { Component, OnInit } from "@angular/core";
import { Form, FormArray, FormBuilder, FormGroup } from "@angular/forms";


@Component({
    selector: 'app-registraion-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.scss']
})
export class RegistraionFormComponent implements OnInit {
    public form!: FormGroup;
    public addressFormArray!: FormArray;
    public formData!: Object;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        const addressArray = this.fb.group({
            street: [''],
            state: [''],
            zipcode: [''],
        });

        this.form = this.fb.group({
            name: [''],
            email: [''],
            mobile: [''],
            gender: [''],
            dob: [''],
            address: this.fb.array([addressArray])
        })
    }

    get address() {
        return this.form.get('address') as FormArray;
    }

    //add more address in form
    addAddress() {
        const address = this.fb.group({
            street: [''],
            state: [''],
            zipcode: [''],
        });
        this.address.push(address);
    }

    //submit form
    submitForm(form: Form) {
        this.formData = form;
    }

    //get form array controls
    getControls() {
        return (this.form.get('address') as FormArray).controls;
    }

    //remove form group from form array
    removeForm(index: number) {
        (this.form.get('address') as FormArray).removeAt(index);
    }
}
