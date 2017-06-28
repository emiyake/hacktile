import { gql } from 'react-apollo';

export const orderDetailQuery = gql`
  query OrderDetail($id: Int) {
    Order(id: $id) {
  		id
      code
      trackingId
      status
      products {
        quantity
        productPresentation {
        	description
        }
      }
      deliveryAddress{
        zip
        street
        number
        additionalDetails
        neighborhood
        city
        state
        mobilePhoneNumber
        phoneNumber
      }
      issueDate
      deliveryDate
    }
  }
`;
