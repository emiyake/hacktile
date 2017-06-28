import { gql } from 'react-apollo';

export const addressListQuery = gql`
  query AddressesList($doctorId: Int) {
    Doctor(id: $doctorId) {
  		addesses {
        id
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
    }
  }
`;
