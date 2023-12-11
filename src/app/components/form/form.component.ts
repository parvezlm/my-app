import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  addressFormArray!: FormArray;
  formData: any;
  isReview: boolean = false;
  lan1: string = 'javascript';
  lan2: string = 'java'


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addressFormArray = this.fb.array([]);
    this.form = this.fb.group({
      date: [''],
      type: [''],
      address: this.addressFormArray
    })
  }

  get address() {
    return this.form.controls['address'] as FormArray;
  } 

  addAddress() {
    const address = this.fb.group({
      addressLine: [''],
      city: [''],
      state: [''],
      zipCode: ['']
    });
    this.address.push(address);
  }

  submitForm(form: NgForm) {
    this.isReview = true;
    this.formData = form;
    this.form.reset();
    console.log(form)
  }

  onEdit() {
    this.isReview = false;
    this.formData.type = 'other';
    this.formData.address.push({addressLine: '8710 smith street', city: 'kansas', state: 'dc', zipCode: '12345'});
    this.addAddress();
    this.form.reset(this.formData);
    console.log(this.formData)
  }

}
