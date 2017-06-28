import { CategoryResource } from '../resource';
import { Observable } from 'rxjs';

export class SubCategoryListUseCase {

  constructor(private resource: CategoryResource) {}

  execute(parentCategoryId: number): Observable<any> {
    return this.resource.listSubcategories(parentCategoryId);
  }

}
