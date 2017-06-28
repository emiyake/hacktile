import { Observable } from 'rxjs';
import { SpecialtyResource } from '../resource';

export class SpecialtyListUseCase {

  constructor(private resource: SpecialtyResource) {}

  execute(): Observable<any> {
    return this.resource.list();
  }

}
