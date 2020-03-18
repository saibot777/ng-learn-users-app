import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { User } from "./user.model";
import { environment } from "../../environments/environment";
import { retry, catchError } from "rxjs/operators";

const url = environment.LEARN_UPON_API_URL;
// for simplicity I've used credentials from here
// this would be a local env const, shouldn' be sharing like this
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization:
      "Basic " + btoa("40c9b7d5cb0ecb9abaab:76c5d1b201c6d52ceae63188fe6d06")
  })
};

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  public getAllUsers(): Observable<User[]> {
    console.log(httpOptions);
    return this.http
      .get<User[]>(url, httpOptions)
      .pipe(retry(3), catchError(this.handleError));
  }

  public createUser(user: User): Observable<User> {
    return this.http
      .post<User>(url, user, httpOptions)
      .pipe(retry(3), catchError(this.handleError));
  }

  // Error handling
  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
