import { CategoryResource } from '../resource';
import { Observable } from 'rxjs';

export class CategoryListUseCase {

  constructor(private resource: CategoryResource) {}

  execute(parentSpecialtyId: number): Observable<any> {
    return this.resource.list(parentSpecialtyId);
  }

}
