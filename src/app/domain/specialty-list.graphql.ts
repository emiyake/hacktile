import { gql } from 'react-apollo';

export const SpecialtyListQueryString = gql`
  query SpecialtyList {
    Specialties{
      nodes{
        name
      }
    }
  }
`;
