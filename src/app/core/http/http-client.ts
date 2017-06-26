import * as _ from '../../../custom-lodash';

import { Observable, Subject } from 'rxjs';

import { RequestBuilder } from './request.builder';

const HTTP_STATUS = {
  NO_CONNECTION: 0,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
};

export class HttpClient {
  private interceptors = [];

  public onUnauthorized: Subject<any> = new Subject<any>();

  request(requestBuilder: RequestBuilder): Observable<any> {
    return this.fetch(requestBuilder.build())
      .flatMap(res => this.extractData(res))
      .catch(err => this.handleError(err))
    ;
  }

  private extractData(res: Response): Observable<any> {
    let json = res.json();
    return Observable.from(json);
  }

  private handleError(error: any) {
    if (error == null) {
      return Observable.throw('Erro durante requisição.');
    }

    const defaultErrMessage = `${error.status} - ${error.statusText}`;
    switch (error.status) {
      case HTTP_STATUS.UNAUTHORIZED:
      case HTTP_STATUS.FORBIDDEN:
        this.onUnauthorized.next(true);
        break;

      case HTTP_STATUS.NO_CONNECTION:
        return Observable.throw('Erro de conexão com a internet');

      default:
        break;
    }

    let responseError;
    try {
      responseError = error.json();
    } catch (e) {
      console.log(error, e);
    }

    if ( (responseError instanceof Array ) && responseError.length > 0) {
      return Observable.throw(responseError[0].message);
    } else if (_.get(responseError, 'data.errors', false)) {
      return Observable.throw(responseError.data.errors);
    } else {
      return Observable.throw(defaultErrMessage);
    }
  }

  addInterceptor(interceptor) {
    this.interceptors.push(interceptor);
  }

  private fetch(request: Request): Observable<Response> {
    let interceptedRequest = this.applyRequestInterceptors(request);
    let promise = fetch(interceptedRequest).then(response => this.applyResponseInterceptors(response));
    return Observable.fromPromise(promise);
  }

  private applyRequestInterceptors(req: Request): Request {
    this.interceptors.forEach(interceptor => {
      req =  interceptor.before ? interceptor.before(req) : req;
    });
    return req;
  }

  private applyResponseInterceptors(res: Response): Response {
    this.interceptors.forEach(interceptor => {
      res = interceptor.after ? interceptor.after(res) : res;
    });

    return res;
  }
}
