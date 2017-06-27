import {
  CategoryListQuery,
  CategoryListQueryVariables,
  SubCategoryListQuery,
  SubCategoryListQueryVariables,
} from '../models/graphql.schema';

import { CategoryListQueryString } from './category-list.graphql';
import { GraphqlClient } from '../core';
import { Observable } from 'rxjs';
import { SubCategoryListQueryString } from './subcategory-list.graphql';

export class CategoryResource {

  constructor(private graphqlClient: GraphqlClient) { }

  list(parentSpecialtyId: number): Observable<any[]> {
    let variables: CategoryListQueryVariables = { specialtyId: parentSpecialtyId};

    return this.graphqlClient
           .query<CategoryListQuery>(CategoryListQueryString, variables)
           .map(data => data.data.Specialty.categories);
  }


  listSubcategories(parentCategoryId: number): Observable<any[]> {
    let variables: SubCategoryListQueryVariables = { parentCategoryId };

    return this.graphqlClient
           .query<SubCategoryListQuery>(SubCategoryListQueryString, variables)
           .map(data => data.data.Category.children);
  }
}
