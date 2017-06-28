import { gql } from 'react-apollo';

export const productDetailQuery = gql`
  query ProductDetail($id: Int){
    Product(id: $id) {
      id
      name
      code
      company
      activePrinciple
      description
      links{
        link
        sequence
      }
    }
  }
`;
