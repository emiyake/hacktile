import { gql } from 'react-apollo';

export const addressListQuery = gql`
  query AddressList {
    Addresses {
      nodes {
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
