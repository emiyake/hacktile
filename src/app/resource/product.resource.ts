import { ProductListQuery, ProductListQueryVariables } from '../models/graphql.schema';

import { GraphqlClient } from '../core';
import { Observable } from 'rxjs';
import { productListQuery } from './product-list.graphql';

export class ProductResource {

  constructor(private graphqlClient: GraphqlClient) { }

  list(): Observable<any[]> {
    let variables: ProductListQueryVariables = { limit: null, offset: null, orderBy: [{ sort: 'name', direction: 'ASC'}]};

    return this.graphqlClient
           .query<ProductListQuery>(productListQuery, variables)
           .map(data => data.data.Products.nodes);
  }

}
