import { Observable } from 'rxjs/Observable';

export interface HttpInterceptor {
    before?(request: Request): Request;
    after?(res: Observable<Response>): Observable<any> ;
}
