import gql from 'graphql-tag';

export const GET_USER_QUERY = gql`
  query getUser($token: String!) {
    getUser(token: $token) {
      id
      name
      email
    }
  }
`;
