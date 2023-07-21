import gql from "graphql-tag";

export const AUTH_MUTATION = gql`
    mutation insertUser($user: users_insert_input!) {
        insertUser(object: $user) {
            email
            password
        }
    }


`