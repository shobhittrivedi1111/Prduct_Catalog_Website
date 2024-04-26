import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorService implements HttpInterceptor{
tkn:any=sessionStorage.getItem('token')
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
// const headers=req.headers.set('Authorization',this.tkn)
    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      req = req.clone({
        
        setHeaders: {          
          
        }
      })
    }

    return next.handle(req);

  }
}
