import { gql } from 'react-apollo';

export const productListQuery = gql`
  query ProductList($limit: Int, $offset: Int, $orderBy: [ProductsOrderingInputObjectType]) {
    Products(offset: $offset, limit: $limit, orderBy: $orderBy) {
      nodes {
        name
        id
        company
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;
