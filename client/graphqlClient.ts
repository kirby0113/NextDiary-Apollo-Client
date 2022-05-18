import { GraphQLClient } from "graphql-request";
import { getSdk } from "../types.d";

export const client = new GraphQLClient("https://nestdiary.herokuapp.com/graphql");
export const sdk = getSdk(client);
