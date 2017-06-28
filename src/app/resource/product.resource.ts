import { ProductDetailQuery, ProductDetailQueryVariables, ProductListQuery, ProductListQueryVariables } from '../models/graphql.schema';
import { productDetailQuery, productListQuery } from './queries';

import { GraphqlClient } from '../core';
import { Observable } from 'rxjs';

const PAGE_WINDOW = 20;

export class ProductResource {

  constructor(private graphqlClient: GraphqlClient) { }

  list(page: number): Observable<any[]> {
    let variables: ProductListQueryVariables = {
      limit: PAGE_WINDOW,
      offset: (page - 1) * PAGE_WINDOW,
      orderBy: [{ sort: 'name', direction: 'ASC'}],
    };

    return this.graphqlClient
           .query<ProductListQuery>(productListQuery, variables)
           .map(data => data.data.Products.nodes);
  }

  fetch(id: number): Observable<any> {
    let variables: ProductDetailQueryVariables = { id };
    return this.graphqlClient
           .query<ProductDetailQuery>(productDetailQuery, variables)
           .map(data => data.data.Product);
  }

}
