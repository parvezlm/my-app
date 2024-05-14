import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from "./data-service";
import { throwError } from "rxjs";



describe('DataService', () => {
    let service: DataService;
    let backend: HttpTestingController;
    const mockData = [         
        {userId: 1, id: 1, title: 'delectus aut autem', completed: false},
        {userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false},
        {userId: 1, id: 3, title: 'fugiat veniam minus', completed: false},
        {userId: 1, id: 4, title: 'et porro tempora', completed: true},
        {userId: 1, id: 5, title: 'laboriosam mollitia et enim quasi adipisci quia provident illum', completed: false}
    ];
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [DataService]
        });
        service = TestBed.inject(DataService);
        backend = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    })

    describe('#getData', () => {
        it('should make a call to /todos end point', () => {
            service.getData('/todos').subscribe((data) => {
                expect(data).toBeTruthy();
            });
            backend.expectOne(req => {
                const url = 'https://jsonplaceholder.typicode.com' + '/todos';
                expect(req.method).toEqual('GET');
                expect(req.url).toEqual(url);
                return true;
            }).flush(mockData)
        });
        it('should throw an error', () => {
            service.getData('/todo').subscribe(res => {
                expect(res).toBeFalsy()
            }, (err) => {
                expect(err).toBeTruthy();
            });
            backend.expectOne(res => {
                const url = 'https://jsonplaceholder.typicode.com' + '/todo';
                expect(res.method).toEqual('GET');
                expect(res.url).toEqual(url);
                return true;
            }).error(new ErrorEvent('Error'))
        }) 
    });
})

