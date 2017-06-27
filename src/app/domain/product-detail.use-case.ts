import { Observable } from 'rxjs';
import { ProductResource } from '../resource';

export class ProductDetailUseCase {

  constructor(private resource: ProductResource) {}

  execute(id: number): Observable<any> {
    return this.resource.fetch(id);
  }

}
