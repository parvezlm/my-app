import { AfterContentInit, Component, ContentChild, ElementRef } from "@angular/core";


@Component({
    selector: 'app-content-child',
    templateUrl: './content-child.component.html',
    styleUrls: ['./content-child.component.scss']
})
export class ContentchildComponent implements AfterContentInit {
    @ContentChild('header')
    heading: ElementRef = {
      nativeElement: undefined
    };

    constructor() {}

    ngAfterContentInit(): void {
        console.log(this.heading)
    }
}