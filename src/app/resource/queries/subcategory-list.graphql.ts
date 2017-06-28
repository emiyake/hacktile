import { gql } from 'react-apollo';

export const subCategoryListQuery = gql`
  query SubCategoryList($parentCategoryId: Int) {
    Category(id: $parentCategoryId) {
      children{
        name,
      	id
      }
    }
  }
`;
