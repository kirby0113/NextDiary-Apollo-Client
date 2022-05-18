import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type CreateDiaryInput = {
  detail: Scalars['String'];
  tags: Array<InputTag>;
  title: Scalars['ID'];
};

export type Diary = {
  __typename?: 'Diary';
  created_at: Scalars['DateTime'];
  detail: Scalars['String'];
  id: Scalars['ID'];
  tags: Array<Tag>;
  title: Scalars['String'];
};

export type GetDiariesInput = {
  order_asc?: InputMaybe<Scalars['Boolean']>;
  tag_id?: InputMaybe<Scalars['Float']>;
};

export type InputTag = {
  id: Scalars['ID'];
  name: Scalars['String'];
  user_id: Scalars['Float'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String'];
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MessageResponse = {
  __typename?: 'MessageResponse';
  message?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDiary: Diary;
  createTag: Tag;
  createUser: User;
  deleteDiary: MessageResponse;
  deleteTag: MessageResponse;
  login: LoginResponse;
  register: LoginResponse;
  updateDiary: Diary;
  updateTag: Tag;
};


export type MutationCreateDiaryArgs = {
  createDiaryInput: CreateDiaryInput;
};


export type MutationCreateTagArgs = {
  name: Scalars['String'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type MutationDeleteDiaryArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['Float'];
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationRegisterArgs = {
  registerUserInput: RegisterUserInput;
};


export type MutationUpdateDiaryArgs = {
  updateDiaryInput: UpdateDiaryInput;
};


export type MutationUpdateTagArgs = {
  id: Scalars['Float'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getDiaries: Array<Diary>;
  getDiary: Diary;
  tags: Array<Tag>;
  user: User;
  users: Array<User>;
};


export type QueryGetDiariesArgs = {
  getDiariesInput: GetDiariesInput;
};


export type QueryGetDiaryArgs = {
  id: Scalars['Float'];
};

export type RegisterUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  name: Scalars['String'];
  user_id: Scalars['Float'];
};

export type UpdateDiaryInput = {
  detail: Scalars['String'];
  id: Scalars['ID'];
  tags: Array<InputTag>;
  title: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type DiariesQueryVariables = Exact<{
  getDiariesInput: GetDiariesInput;
}>;


export type DiariesQuery = { __typename?: 'Query', getDiaries: Array<{ __typename?: 'Diary', id: string, title: string }> };

export type DiaryQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type DiaryQuery = { __typename?: 'Query', getDiary: { __typename?: 'Diary', id: string, title: string } };

export type RegisterMutationVariables = Exact<{
  registerUserInput: RegisterUserInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'LoginResponse', access_token: string } };


export const DiariesDocument = gql`
    query Diaries($getDiariesInput: GetDiariesInput!) {
  getDiaries(getDiariesInput: $getDiariesInput) {
    id
    title
  }
}
    `;
export const DiaryDocument = gql`
    query Diary($id: Float!) {
  getDiary(id: $id) {
    id
    title
  }
}
    `;
export const RegisterDocument = gql`
    mutation Register($registerUserInput: RegisterUserInput!) {
  register(registerUserInput: $registerUserInput) {
    access_token
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Diaries(variables: DiariesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DiariesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DiariesQuery>(DiariesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Diaries', 'query');
    },
    Diary(variables: DiaryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DiaryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DiaryQuery>(DiaryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Diary', 'query');
    },
    Register(variables: RegisterMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RegisterMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RegisterMutation>(RegisterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Register', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;