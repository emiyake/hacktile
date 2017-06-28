import { AddressResource } from '../resource';
import { Observable } from 'rxjs';

export class AddressListUseCase {

  constructor(private resource: AddressResource) {}

  execute(doctorId: number): Observable<any> {
    return this.resource.list(doctorId);
  }

}
