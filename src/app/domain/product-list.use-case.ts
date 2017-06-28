import { Observable } from 'rxjs';
import { ProductResource } from '../resource';

export class ProductListUseCase {

  constructor(private resource: ProductResource) {}

  execute(page: number): Observable<any> {
    return this.resource.list(page);
  }

}
