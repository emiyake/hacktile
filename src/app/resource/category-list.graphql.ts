import { gql } from 'react-apollo';

export const categoryListQuery = gql`
  query CategoryList($specialtyId: Int) {
    Specialty(id: $specialtyId) {
      categories{
        id
        name
      }
    }
  }
`;
