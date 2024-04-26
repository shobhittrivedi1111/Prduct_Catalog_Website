import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
    providedIn: 'root'
})
export class ApiService {


    uname!: string;
    pass!: string;
    priceList: any;


    constructor(private http: HttpClient) { }
    postUser(data: any) {
        return this.http.post<any>("http://localhost:3000/posts", data)
            .pipe(map((res: any) => {
                return res;
            }))
    }
    getUser() {
        return this.http.get<any>("http://localhost:3000/posts")
            .pipe(map((res: any) => {
                return res;
            }))
    }



    getUserValue(uname: string, pass: string) {
        return this.http.get("http://localhost:3000/posts?rollno=" + uname + "&DOB=" + pass)
            .pipe(map((res: any) => {
                return res;
            }))

    }
    setUserValues(RollNo: any, Name: string, dob: string, Result: string) {
        this.uname = RollNo;
        this.pass = Name;
        // this.DOB=dob;
        // this.result=Result;
        localStorage.setItem('rn', RollNo);
        localStorage.setItem('n', Name);
        // localStorage.setItem('d',dob);
        // localStorage.setItem('r',Result);


    }


    public loginUserFromRemote(user: User): Observable<any> {
        return this.http.post<any>("http://localhost:8081/login", user)
    }

    public registerUserFromRemote(user: User): Observable<any> {
        return this.http.post<any>("http://localhost:8081/register", user)
    }


    searchProductsList(value: string): Observable<any> {
        return this.http.get<any>("http://localhost:8081/product/search?keyword=" + value)
    }

  
    viewProduct(productId: string,tkn:any): Observable<any> {
        console.log(tkn);
        tkn=sessionStorage.getItem("token");
        const headers=new HttpHeaders().set("Authorization",tkn);
        return this.http.get<any>("http://localhost:8081/product/productcode?productCode=" + productId,{headers})
      
    }

    viewAllProducts(): Observable<any> {
        return this.http.get<any>("http://localhost:8081/product")

    }


    deliverProduct(value: string,tkn:any): Observable<any> {
        console.log(tkn);
        tkn=sessionStorage.getItem("token");
        const headers=new HttpHeaders().set("Authorization",tkn);
        return this.http.get<any>("http://localhost:8081/product/pincode?pincode=" + value,{headers})

    }


    authenticate(username: string, password: any) {
        return this.http
          .post<any>("http://localhost:8081/authenticate", { username, password })
          .pipe(
            map(userData => {
              sessionStorage.setItem("username", username);
            //   let tokenStr = "Bearer " + userData.token;
            let tokenStr = "Bearer " + userData.token;
              sessionStorage.setItem("token", tokenStr);
              return userData;
            })
          );
      }
    
      isUserLoggedIn() {
        let user = sessionStorage.getItem("username");
        // console.log(!(user === null));
        return !(user === null);
      }
    
      logOut() {
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("token");
      
      }

      getPriceList() {
        return this.priceList;
      }
      setPriceList(list: any) {
        this.priceList = list;
      }
      getAllPriceList(tkn: any): Observable<any> {
        console.log(tkn);
        tkn = sessionStorage.getItem("token");
        const headers = new HttpHeaders().set("Authorization", tkn);
        return this.http.get<any>("http://localhost:8081/productPrices", { headers })
    
      }
}

    
