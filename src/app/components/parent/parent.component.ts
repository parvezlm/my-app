import { Component, DoCheck, OnDestroy, OnInit } from "@angular/core";


@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, DoCheck {
    public item: string = '';
    public isComponentVisible: boolean = true;
    
    constructor() {}

    ngDoCheck(): void {
        // console.log('parent DoCheck')
    }
    ngOnInit(): void {
        // console.log('parent onInit')
    }

    parentToChild(elm: any) {
        this.item = elm.value;
    }

    destroy() {
        this.isComponentVisible = false;
    }

}