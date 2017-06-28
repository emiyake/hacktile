import { Observable } from 'rxjs';
import { OrderResource } from '../resource';

export class OrderDetailUseCase {

  constructor(private resource: OrderResource) {}

  execute(id: number): Observable<any> {
    return this.resource.fetch(id);
  }

}
