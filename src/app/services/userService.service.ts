import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class UserServiceService {

    constructor(private http: Http) { }
    getData() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }
}
