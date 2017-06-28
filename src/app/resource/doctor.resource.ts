import { DoctorDetailQuery, DoctorDetailQueryVariables } from '../models/graphql.schema';

import { GraphqlClient } from '../core';
import { Observable } from 'rxjs';
import { doctorDetailQuery }  from './queries';

export class DoctorResource {

  constructor(private graphqlClient: GraphqlClient) { }

  fetch(id: number): Observable<any> {
    let variables: DoctorDetailQueryVariables = { id };
    return this.graphqlClient
           .query<DoctorDetailQuery>(doctorDetailQuery, variables)
           .map(data => data.data.Doctor);
  }

}
