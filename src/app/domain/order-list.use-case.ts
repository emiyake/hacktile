import { Observable } from 'rxjs';
import { OrderResource } from '../resource';

export class OrderListUseCase {

  constructor(private resource: OrderResource) {}

  execute(page: number): Observable<any> {
    return this.resource.list(page);
  }

}
