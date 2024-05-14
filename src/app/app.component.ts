import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  obj: any = {
    'name': 'jhon',
    'age': 28,
    'company': 'cognizant',
    'designation': 'angular developer'
  }
  form: FormGroup;
  hideArray: Array<boolean> = [];
  location!: FormGroup;
  options: any = [
    { key: "set", value: "Set" },
    { key: "wait", value: "Wait" },
    { key: "go", value: "Go" }
  ];
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      credentials: this.fb.array([])
    });
    
  }
  
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    const arr = this.form.controls['credentials'] as FormArray;
    this.location = arr.controls[0] as FormGroup;
    if (arr.controls.length) {
      this.location.valueChanges.pipe(debounceTime(100)).subscribe(value => {
        console.log(value);
      })
    }
  }

  addCreds() {
    const creds = this.form.controls['credentials'] as FormArray;
    creds.push(
      this.fb.group({
        action: "",
        name: "",
        label: { disabled: true, value: "" },
        toggle: false
      })
    );
    this.hideArray.push(false);
    const arr = this.form.controls['credentials'] as FormArray;
    console.log(arr.controls[0])
  }

  updateData(index: number) {
    const myForm = (<FormArray>this.form.get("credentials")).at(index);
    let currentVal = !myForm.value.toggle;
    console.log("Before=>", myForm, myForm.value.toggle);
    myForm.patchValue({
      toggle: currentVal
    });
    this.hideArray[index] = currentVal;
    console.log("=>", myForm, myForm.value.toggle);
  }

  printData(id: string) {
    for (let item in this.obj) {
      let tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${item}</td>
        <td>${this.obj[item]}</td>
      `;
      document.getElementById(id)?.appendChild(tr);
    }
  }
}
