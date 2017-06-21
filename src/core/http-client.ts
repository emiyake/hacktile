import { Observable } from 'rxjs';

export class HttpClient {
  private BASE_URL = 'https://lab-in-hands-app-piloto-dev.herokuapp.com/';
  private API_VERSION = 'v1/';

  get(endpoint): Observable<any> {
    console.log(this.BASE_URL + this.API_VERSION + endpoint);
    return Observable.from(fetch(this.BASE_URL + this.API_VERSION + endpoint)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      }));
  }

  post(endpoint, body): Observable<any> {
    console.log(this.BASE_URL + this.API_VERSION + endpoint);
    return Observable.from(fetch(this.BASE_URL + this.API_VERSION + endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      }));
  }
}
