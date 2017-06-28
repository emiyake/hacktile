import {
  OrderDetailQuery,
  OrderDetailQueryVariables,
  OrderListQuery,
  OrderListQueryVariables,
} from '../models/graphql.schema';
import { orderDetailQuery, orderListQuery } from './queries';

import { GraphqlClient } from '../core';
import { Observable } from 'rxjs';

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

  fetch(id: number): Observable<any> {
    let variables: OrderDetailQueryVariables = { id };
    return this.graphqlClient
           .query<OrderDetailQuery>(orderDetailQuery, variables)
           .map(data => data.data.Order);
  }


}
