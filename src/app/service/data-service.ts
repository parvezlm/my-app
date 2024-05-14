import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, ReplaySubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private baseUrl = 'https://jsonplaceholder.typicode.com';
    data = new ReplaySubject<any>(1);

    constructor(private http: HttpClient) {}

    students = [
        { name: 'doe', marks: '650', rollNo: '234567', age: 20 , gender: 'male'},
        { name: 'lindsay', marks: '550', rollNo: '987654', age: 21, gender: 'female' },
        { name: 'jack', marks: '600', rollNo: '765434', age: 24, gender: 'male' },
        { name: 'kathy', marks: '450', rollNo: '987609', age: 18, gender: 'female' },
    ]


    getData(url: string): Observable <any>{
        return this.http.get(this.baseUrl + url);
    }

    getPosts(url: string): Observable <any> {
        return this.http.get(this.baseUrl + url);
    }
}