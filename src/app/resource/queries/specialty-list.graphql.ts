import { gql } from 'react-apollo';

export const specialtyListQuery = gql`
  query SpecialtyList($limit: Int, $offset: Int, $orderBy: [SpecialtiesOrderingInputObjectType]){
    Specialties(limit: $limit, offset: $offset, orderBy: $orderBy){
      nodes {
        name
        id
      }
    }
  }
`;
