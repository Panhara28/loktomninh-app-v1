import { gql } from "@apollo/client";

export const GET_PRODUCT_LIST = gql`
  query clientProductList($limit: Int!, $offset: Int!) {
    clientProductList(limit: $limit, offset: $offset) {
      id
      product_name
      image
      slug
      properties {
        id
        price
        stock
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query clientProductDetail($slug: String!) {
    clientProductDetail(slug: $slug) {
      id
      product_name
      image
      description
      properties {
        id
        price
        stock
        image_url
        property
        slug
      }
    }
  }
`;

export const GET_CATEGORY_LIST = gql`
  query clientCategoryList($limit: Int!, $offset: Int!) {
    clientCategoryList(limit: $limit, offset: $offset) {
      id
      category_name
      image
      slug
      product {
        product_name
        slug
        image
        properties {
          id
          price
          stock
        }
      }
    }
  }
`;

export const GET_CATEGORY_LIST_DETAIL = gql`
  query clientCategoryDetail($slug: String!, $limit: Int!, $offset: Int!) {
    clientCategoryDetail(slug: $slug, limit: $limit, offset: $offset) {
      product {
        id
        product_name
        image
        slug
        properties {
          id
          price
          stock
        }
      }
    }
  }
`;

export const CUSTOMER_LOGIN = gql`
  mutation customerLogin($data: CustomerLoginInput!) {
    customerLogin(data: $data)
  }
`;

export const CUSTOMER_CREATE = gql`
  mutation customerSignup($input: CustomerSignUpInput!) {
    customerSignup(input: $input)
  }
`;

export const CUSTOMER_VERIFY = gql`
  mutation customerVerify($input: CustomerVerifyInput!) {
    customerVerify(input: $input)
  }
`;

export const GET_CUSTOMER_LOGGED = gql`
  query customerLogged {
    customerLogged {
      id
      nameDisplay
      picture
      contacts {
        id
        phone_number
        active
      }
      locations {
        id
        location
        active
      }
    }
  }
`;

export const UPDATE_CUSTOMER = gql`
  mutation customerEditProfile(
    $token: String!
    $input: CustomerEditProfileInput
  ) {
    customerEditProfile(token: $token, input: $input)
  }
`;

export const CUSTOMER_LOGOUT = gql`
  mutation customerLogout($token: String!) {
    customerLogout(token: $token)
  }
`;

export const CHECKOUT = gql`
  mutation checkout(
    $input: [CheckoutInput]
    $phone_number: String!
    $address: String!
  ) {
    checkout(input: $input, phone_number: $phone_number, address: $address)
  }
`;

export const SEARCH_PRODUCTS = gql`
  query clientProductSearch($limit: Int!, $offset: Int!, $search: String) {
    clientProductSearch(limit: $limit, offset: $offset, search: $search) {
      product_name
      slug
      image
    }
  }
`;
