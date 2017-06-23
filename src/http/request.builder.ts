import { HeadersAppender } from './request-headers.appender';

export const REQUEST_METHOD: { [propName: string]: RequestMethod  } = {
    GET     :   'GET',
    POST    :   'POST',
    PUT     :   'PUT',
    DELETE  :   'DELETE',
    OPTIONS :   'OPTIONS',
    HEAD    :   'HEAD',
    PATCH   :   'PATCH',
};
export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'PATCH';

export class RequestBuilder {
  private headersAppenders: HeadersAppender[] = [];
  private search: URLSearchParams;
  private body: any;
  private url: URL;

  constructor(private method: RequestMethod, base: string, endpoint: string = '') {
    this.url = new URL(endpoint, base);
  }

  withParams(params: any) {
    if (params) {
      this.search = new URLSearchParams();

      for (let key in params) {
        this.search.set(key, params[key]);
      }
    }

    return this;
  }

  withBody(body: any) {
    this.body = JSON.stringify(body);
    return this;
  }

  withHeader(appender: HeadersAppender) {
    this.headersAppenders.push(appender);
    return this;
  }

  build(): Request {
    let method  = this.method;
    let body    = this.body;
    let search  = this.search;
    let headers = new Headers();

    let url = search ? this.url.href.concat(search.toString()) : this.url.href;

    for (let appender of this.headersAppenders) {
      appender.append(headers);
    }

    let options: RequestInit = { method, headers, body };
    console.log(options);
    return new Request(url, options);
  }
}
