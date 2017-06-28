import { gql } from 'react-apollo';

export const doctorDetailQuery = gql`
  query DoctorDetail($id: Int) {
    Doctor(id: $id) {
	  	name
      email
      birthdate
      crm {
        number
        state
      }
      identification {
        type
        number
      }
      specialty {
        id
        name
      }
    }
  }
`;
