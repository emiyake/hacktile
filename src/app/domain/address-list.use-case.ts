import { AddressResource } from '../resource';
import { Observable } from 'rxjs';

export class AddressListUseCase {

  constructor(private resource: AddressResource) {}

  execute(): Observable<any> {
    return this.resource.list();
  }

}
