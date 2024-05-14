import { Component, DoCheck, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, ActivationEnd, NavigationEnd, NavigationStart, Router } from "@angular/router";
import { Subscription, concatAll, concatMap, delay, filter, from, map, mergeAll, mergeMap, of } from "rxjs";
import { DataService } from "src/app/service/data-service";


@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, DoCheck {
    public item: string = '';
    public isComponentVisible: boolean = true;
    private subscription = new Subscription();
    response: any;
    
    constructor(
        private router: Router, 
        private activatedRoute: ActivatedRoute,
        private dataService: DataService
        ) { }

    ngDoCheck(): void {
        // console.log('parent DoCheck')
    }
    ngOnInit(): void {
        const tutorials = from(['angular', 'reactjs', 'nodejs', 'vuejs']);
        tutorials.pipe(
            // // concatMap(this.modifieData),
            // mergeMap(value => this.modifieData(value))
            map(value => this.modifieData(value)),
            mergeAll()
        ).subscribe(tutorial => {
            // const li = document.createElement('li');
            // li.textContent = tutorial;
            // document.getElementById('tutorial')?.appendChild(li);
            console.log(tutorial)
        });

       this.subscription =  this.dataService.data.subscribe(res => {
            this.response = res;
        })
    }

    parentToChild(elm: any) {
        this.item = elm.value;
    }
    
    modifieData(value: any) {
        return of(`This is ${value} tutorial`).pipe(delay(1000));
    }

    destroy() {
        this.isComponentVisible = false;
    }
}

