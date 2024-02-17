import { HttpHandler,HttpEvent, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
import { Injectable } from "@angular/core";


const TOKEN_HEADER = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{

  constructor (private login:LoginService){}

  intercept(
    req: HttpRequest<any>, 
    next: HttpHandler
    ): Observable<HttpEvent<any>> {
   let authReq=req;
   const token= this.login.getToken();
  console.log('inside interceptor');

   if(token!=null)
   {
      authReq= authReq.clone({
        setHeaders:{ Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*" },
    });
   }
  return next.handle(authReq);

    }
    

}
 
export const authInterceptorProviders=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true,
    },
];


