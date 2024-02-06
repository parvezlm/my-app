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

    addAddress() {
        const address = this.fb.group({
            street: [''],
            state: [''],
            zipcode: [''],
        });
        this.address.push(address);
    }

    submitForm(form: Form) {
        console.log(form)
    }

    getControls() {
        return (this.form.get('address') as FormArray).controls;
    }
}
