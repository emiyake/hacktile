import { gql } from 'react-apollo';

export const SubCategoryListQueryString = gql`
  query SubCategoryList($parentCategoryId: Int) {
    Category(id: $parentCategoryId) {
      children{
        name,
      	id
      }
    }
  }
`;
