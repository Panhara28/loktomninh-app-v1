import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { BatchHttpLink } from "apollo-link-batch-http";
import { createUploadLink } from "apollo-upload-client";

export const clientRequireToken = (token?: string) => {
  let uri: string =
    process.env.NEXT_PUBLIC_API_URL || "https://gql-dev.loktomninh.com/?token=";
  console.log(`Pointing end point: ${uri}`);

  if (token !== undefined && token !== null && token.length > 5) {
    uri += `${token}`;
  }

  const uploadLink = createUploadLink({ uri });
  const batch: any = new BatchHttpLink({ uri });

  const link = ApolloLink.split(
    (op) => op.operationName === "singleUpload",
    uploadLink,
    batch
  );

  return new ApolloClient({
    uri,
    link,
    cache: new InMemoryCache(),
    name: "loktomninh",
    defaultOptions: {
      watchQuery: {
        errorPolicy: "all",
      },
      query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all",
      },
    },
  });
};
