import { Observable } from 'rxjs';
import { ProductResource } from '../resource';

export class ProductListUseCase {

  constructor(private resource: ProductResource) {}

  execute(): Observable<any> {
    return this.resource.list();
  }

}
