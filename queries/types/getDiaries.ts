/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GetDiariesInput } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: getDiaries
// ====================================================

export interface getDiaries_getDiaries {
  __typename: "Diary";
  id: string;
  title: string;
}

export interface getDiaries {
  getDiaries: getDiaries_getDiaries[];
}

export interface getDiariesVariables {
  getDiariesInput?: GetDiariesInput | null;
}
