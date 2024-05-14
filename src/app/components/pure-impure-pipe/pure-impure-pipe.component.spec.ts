import { TestBed } from "@angular/core/testing";
import { PureImpurePipe } from "./pure-impure-pipe.component";
import { DataService } from "src/app/service/data-service";
import { from, of } from "rxjs";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";


describe('PureImpurePipe', () => {
    let component: PureImpurePipe;
    let service: DataService;

    const mockData = [         
        {userId: 1, id: 1, title: 'delectus aut autem', completed: false},
        {userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false},
        {userId: 1, id: 3, title: 'fugiat veniam minus', completed: false},
        {userId: 1, id: 4, title: 'et porro tempora', completed: true},
        {userId: 1, id: 5, title: 'laboriosam mollitia et enim quasi adipisci quia provident illum', completed: false}
    ];

    const mockDataService = {
        'getData': jasmine.createSpyObj(['getData'])
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                PureImpurePipe,
                FormBuilder,
                { provide: DataService, useValue: DataService},
                { provide: ActivatedRoute, useValue: ActivatedRoute}
            ]
        });
        component = TestBed.inject(PureImpurePipe);
        service = TestBed.inject(DataService);
    });

    describe('getData', () => {
        it('should get data', () => {
            spyOn(component, 'getData');
            // spyOn(service, 'getData');
            component.getData('/todos');
            expect(component.todos).toBeTruthy()
        });
    });
    describe('getPosts', () => {
        it('should call service.getPosts() with correct endpoint', () => {
            const serviceSpy = spyOn(service, 'getPosts').and.callThrough();
            component.getPosts('/posts');
            expect(serviceSpy).toHaveBeenCalledWith('/posts');
        });
    })

})