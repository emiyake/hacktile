import { DoctorResource } from '../resource';
import { Observable } from 'rxjs';

export class DoctorDetailUseCase {

  constructor(private resource: DoctorResource) {}

  execute(id: number): Observable<any> {
    return this.resource.fetch(id);
  }

}
