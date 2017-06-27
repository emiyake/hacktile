import { SpecialtyListQuery, SpecialtyListQueryVariables } from '../models/graphql.schema';

import { GraphqlClient } from '../core';
import { Observable } from 'rxjs';
import { SpecialtyListQueryString } from './specialty-list.graphql';

export class SpecialtyListUseCase {

  constructor(private graphqlClient: GraphqlClient) {}

  execute(): Observable<any> {
    let variables: SpecialtyListQueryVariables = { limit: null, offset: null, orderBy: [{ sort: 'name', direction: 'ASC'}]};

    return this.graphqlClient
           .query<SpecialtyListQuery>(SpecialtyListQueryString, variables)
           .map(data => data.data.Specialties.nodes.map(node => node.name));
  }

}
