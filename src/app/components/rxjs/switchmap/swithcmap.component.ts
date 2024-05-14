import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { delay, from, fromEvent, mergeMap, of, switchMap } from "rxjs";


@Component({
    selector: 'app-switchmap',
    templateUrl: './swithcmap.component.html',
    styleUrls: ['./swithcmap.component.scss']
})
export class SwitchmapComponent implements OnInit {
    @ViewChild('input') input!: ElementRef;

    constructor() { }

    ngOnInit(): void {

        const dummyApi = (character: any) => {
            return of(`Search result for keyword: ${character}`).pipe(delay(1000))
        }

        from(['a', 'an', 'ang', 'angu', 'angul', 'angula', 'angular'])
            .pipe(
                switchMap(arr => dummyApi(arr))
            )
            .subscribe(res => {
                console.log(res)
            })
    }

}