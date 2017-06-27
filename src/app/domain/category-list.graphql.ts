import { gql } from 'react-apollo';

export const CategoryListQueryString = gql`
  query CategoriesList($specialtyId: Int) {
    Specialty(id: $specialtyId) {
      categories{
        id
        name
      }
    }
  }
`;
