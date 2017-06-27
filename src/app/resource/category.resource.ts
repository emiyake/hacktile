import { CategoriesListQuery, CategoriesListQueryVariables } from '../models/graphql.schema';

import { CategoryListQueryString } from './category-list.graphql';
import { GraphqlClient } from '../core';
import { Observable } from 'rxjs';

export class CategoryResource {

  constructor(private graphqlClient: GraphqlClient) { }

  list(parentSpecialtyId: number): Observable<any[]> {
    let variables: CategoriesListQueryVariables = { specialtyId: parentSpecialtyId};

    return this.graphqlClient
           .query<CategoriesListQuery>(CategoryListQueryString, variables)
           .map(data => data.data.Specialty.categories);
  }

}
