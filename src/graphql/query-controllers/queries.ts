/* eslint-disable @typescript-eslint/no-unused-vars */
import { gql } from "@apollo/client";

const AllUsersQuery = gql`
  query AllUsers {
    users {
      name
    }
  }
`;
