import { AddressesListQuery, AddressesListQueryVariables } from '../models/graphql.schema';

import { GraphqlClient } from '../core';
import { Observable } from 'rxjs';
import { addressListQuery } from './queries';

export class AddressResource {

  constructor(private graphqlClient: GraphqlClient) { }

  list(doctorId: number): Observable<any[]> {
    let variables: AddressesListQueryVariables = { doctorId };
    return this.graphqlClient
           .query<AddressesListQuery>(addressListQuery, variables)
           .map(data => data.data.Doctor.addesses);
  }

}
