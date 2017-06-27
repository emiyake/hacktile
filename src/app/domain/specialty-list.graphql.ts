import { gql } from 'react-apollo';

export const SpecialtyListQueryString = gql`
  query SpecialtyList($limit: Int, $offset: Int, $orderBy: [SpecialtiesOrderingInputObjectType]){
    Specialties(limit: $limit, offset: $offset, orderBy: $orderBy){
      nodes {
        name
      }
    }
  }
`;
