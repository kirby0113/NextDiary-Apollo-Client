import { gql } from "@apollo/client";

export const GET_DIARIES = gql`
  query getDiaries($getDiariesInput: GetDiariesInput) {
    getDiaries(getDiariesInput: $getDiariesInput) {
      id
      title
    }
  }
`;
