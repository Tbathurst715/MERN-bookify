import { gql } from "@apollo/client";

export const GET_ME = gql`
  query user($username: String!) {
    me(username: $username) {
      _id
    }
  }
`;
