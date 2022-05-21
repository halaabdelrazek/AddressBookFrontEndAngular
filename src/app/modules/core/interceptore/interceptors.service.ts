import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class Interceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var token = localStorage.getItem('token');
        let req2 = new HttpHeaders();
        req2 = req2.append('Authorization', !!token ? 'Bearer ' + token : '');
        const updatedRequest = req.clone({
            headers: req2
        });
        return next.handle(updatedRequest)
    }


}