import { gql } from 'react-apollo';

export const orderListQuery = gql`
  query OrderList($limit: Int, $offset: Int, $orderBy: [OrdersOrderingInputObjectType]){
    Orders(limit: $limit, offset: $offset, orderBy: $orderBy){
      nodes {
        id
        code
        status
        issueDate
        deliveryDate
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;
