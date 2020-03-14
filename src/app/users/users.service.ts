import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./user.model";
import { environment } from "../../environments/environment";

const url = environment.LEARN_UPON_API_URL;

@Injectable()
export class UsersService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(url);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(url, user);
  }
}
