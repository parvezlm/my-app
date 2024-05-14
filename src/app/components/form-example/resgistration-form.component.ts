import { Component, OnInit } from "@angular/core";
import { Form, FormArray, FormBuilder, FormGroup } from "@angular/forms";


@Component({
    selector: 'app-register-form',
    templateUrl: './resgistration-form.component.html',
    styleUrls: ['./resgistration-form.component.scss']
})
export class ResgisterFormComponents implements OnInit {
    public registerForm!: FormGroup;
    public addressArray!: FormGroup;
    public show: boolean = false;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.addressArray = this.fb.group({
            flatNo: [''],
            streetName: [''],
            city: [''],
            state: [''],
            zipcode: ['']
        });

        this.registerForm = this.fb.group({
            name: '',
            email: [''],
            phone: [''],
            address: this.fb.array([this.addressArray])
        });
        this.show = true;
    }

    //get form controls
    get form() {
        return this.registerForm.get('address') as FormArray;
    }

    //get form array controls
    getControls() {
        return (this.registerForm.get('address') as FormArray).controls;
    }

    //submit form
    submit(form: Form) {
        console.log(form)
    }

    //add form controls in form array
    addControls() {
        const form = this.fb.group({
            flatNo: [''],
            streetName: [''],
            city: [''],
            state: [''],
            zipcode: ['']
        });
        this.form.push(form);
    }

    //remove controls from form array
    removeControls(index: any) {
        (this.registerForm.get('address') as FormArray).removeAt(index)
    }

}