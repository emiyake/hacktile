import { AddressListQuery } from '../models/graphql.schema';
import { GraphqlClient } from '../core';
import { Observable } from 'rxjs';
import { addressListQuery } from './queries';

export class AddressResource {

  constructor(private graphqlClient: GraphqlClient) { }

  list(): Observable<any[]> {
    return this.graphqlClient
           .query<AddressListQuery>(addressListQuery)
           .map(data => data.data.Addresses.nodes);
  }

}
