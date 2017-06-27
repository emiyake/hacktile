import { OrderListQuery, OrderListQueryVariables } from '../models/graphql.schema';

import { GraphqlClient } from '../core';
import { Observable } from 'rxjs';
import { orderListQuery } from './order-list.graphql';

const PAGE_WINDOW = 20;

export class OrderResource {

  constructor(private graphqlClient: GraphqlClient) { }

  list(page: number): Observable<any[]> {
    let variables: OrderListQueryVariables = {
      limit: PAGE_WINDOW,
      offset: (page - 1) * PAGE_WINDOW,
      orderBy: null,
    };

    return this.graphqlClient
           .query<OrderListQuery>(orderListQuery, variables)
           .map(data => data.data.Orders.nodes);
  }

}
