import { GraphqlClient } from '../core';
import { Observable } from 'rxjs';
import { SpecialtyListQuery } from '../models/graphql.schema';
import { SpecialtyListQueryString } from './specialty-list.graphql';

export class SpecialtyListUseCase {

  constructor(private graphqlClient: GraphqlClient) {}

  execute(): Observable<any> {
    return this.graphqlClient.query<SpecialtyListQuery>(SpecialtyListQueryString).map(data => data.data.Specialties.nodes.map(node => node.name));
  }

}
