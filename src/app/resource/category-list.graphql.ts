import { gql } from 'react-apollo';

export const CategoryListQueryString = gql`
  query CategoryList($specialtyId: Int) {
    Specialty(id: $specialtyId) {
      categories{
        id
        name
      }
    }
  }
`;
