import { gql } from "@apollo/client";

const GET_DIARIES = gql`
  query Diaries($getDiariesInput: GetDiariesInput!) {
    getDiaries(getDiariesInput: $getDiariesInput) {
      id
      title
    }
  }
`;

const GET_DIARY = gql`
  query Diary($id: Float!) {
    getDiary(id: $id) {
      id
      title
    }
  }
`;

const REGISTER = gql`
  mutation Register($registerUserInput: RegisterUserInput!) {
    register(registerUserInput: $registerUserInput) {
      access_token
    }
  }
`;
