import {
  CategoryListQuery,
  CategoryListQueryVariables,
  SubCategoryListQuery,
  SubCategoryListQueryVariables,
} from '../models/graphql.schema';
import { categoryListQuery, subCategoryListQuery } from './queries';

import { GraphqlClient } from '../core';
import { Observable } from 'rxjs';

export class CategoryResource {

  constructor(private graphqlClient: GraphqlClient) { }

  list(parentSpecialtyId: number): Observable<any[]> {
    let variables: CategoryListQueryVariables = { specialtyId: parentSpecialtyId};

    return this.graphqlClient
           .query<CategoryListQuery>(categoryListQuery, variables)
           .map(data => data.data.Specialty.categories);
  }


  listSubcategories(parentCategoryId: number): Observable<any[]> {
    let variables: SubCategoryListQueryVariables = { parentCategoryId };

    return this.graphqlClient
           .query<SubCategoryListQuery>(subCategoryListQuery, variables)
           .map(data => data.data.Category.children);
  }
}
