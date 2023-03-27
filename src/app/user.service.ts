import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';


@Injectable()
export class UserService {
    private readonly url = "https://localhost:7210/users/api";
    private readonly headers: HttpHeaders;
    constructor(private http: HttpClient) {
        const headers: HttpHeaders = new HttpHeaders().set("Content-type", "application/json")
    }

    getUsers() {
        return this.http.get<Array<User>>(this.url);
    }
    createUser(user: User) {
        return this.http.post<User>(this.url, JSON.stringify(user), { headers: this.headers });
    }
    updateUser(user: User) {
        return this.http.put<User>(this.url, JSON.stringify(user), { headers: this.headers });
    }
    deleteUser(id: string) {
        return this.http.delete<User>(this.url + "/" + id);
    }
}