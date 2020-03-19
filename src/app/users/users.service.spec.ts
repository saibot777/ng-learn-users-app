import { TestBed, async, inject } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { UsersService } from "./users.service";
import { User } from "./user.model";

describe("UsersService", () => {
  let usersService: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService]
    });

    usersService = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it(`should fetch users as an Observable`, async(
    inject(
      [HttpTestingController, UsersService],
      (httpClient: HttpTestingController, userService: UsersService) => {
        const users: User[] = [
          {
            first_name: "John",
            last_name: "Doe",
            email: "johndoe@mail.com",
            language: "en",
            username: "johndoe",
            password: "12345"
          },
          {
            first_name: "John2",
            last_name: "Doe2",
            email: "johndoe2@mail.com",
            language: "en",
            username: "johndoe2",
            password: "12345"
          }
        ];

        // tslint:disable-next-line: no-shadowed-variable
        userService.getAllUsers().subscribe((users: User[]) => {
          expect(users.length).toBe(2);
        });

        const req = httpMock.expectOne(
          "https://angularlu.luptest.com/api/v1/users"
        );
        expect(req.request.method).toBe("GET");

        req.flush(users);
        httpMock.verify();
      }
    )
  ));
});
