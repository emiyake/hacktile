import { SpecialtyListQuery, SpecialtyListQueryVariables } from '../models/graphql.schema';

import { GraphqlClient } from '../core';
import { Observable } from 'rxjs';
import { specialtyListQuery } from './queries';

export class SpecialtyResource {

  constructor(private graphqlClient: GraphqlClient) { }

  list(): Observable<any[]> {
    let variables: SpecialtyListQueryVariables = { limit: null, offset: null, orderBy: [{ sort: 'name', direction: 'ASC'}]};

    return this.graphqlClient
           .query<SpecialtyListQuery>(specialtyListQuery, variables)
           .map(data => data.data.Specialties.nodes);
  }

}
