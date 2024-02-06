import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";


@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    @Input() data: string = '';

    constructor() {}
   
    ngDoCheck(): void {
        // console.log('child doCheck');
    }

    ngOnChanges(changes: SimpleChanges): void {
        // console.log('child onChange');
    }

    ngOnInit(): void {
        // console.log('child onInit');
    }

    ngAfterContentInit(): void {
        // console.log('child ngAfterContentInit');
    }

    ngAfterContentChecked(): void {
        // console.log('child ngAfterContentChecked');
    }

    ngAfterViewInit(): void {
        // console.log('child ngAfterViewInit');
    }

    ngAfterViewChecked(): void {
        // console.log('child ngAfterViewChecked');
    }
 
    ngOnDestroy(): void {
        // console.log('destroy component');
    }

}