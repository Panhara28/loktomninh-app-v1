import { gql } from "@apollo/client";

export const GET_PRODUCT_LIST = gql`
  query clientProductList($limit: Int!, $offset: Int!) {
    clientProductList(limit: $limit, offset: $offset) {
      id
      product_name
      image
      slug
      price
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
      product_type
      slug
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
  query clientCategoryList($limit: Int!, $offset: Int!, $slug: String!) {
    clientCategoryList(limit: $limit, offset: $offset) {
      id
      category_name
      image
      slug
      parent
      product {
        id
        product_name
        slug
        image
        price
        properties {
          id
          price
          stock
        }
      }
    }
    clientCategoryDetail(slug: $slug, limit: $limit, offset: $offset) {
      id
      product {
        id
        product_name
        image
        slug
        price
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
      id
      category_name
      product {
        id
        product_name
        image
        slug
        price
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
    $aba_image: String!
  ) {
    checkout(
      input: $input
      phone_number: $phone_number
      address: $address
      aba_image: $aba_image
    )
  }
`;

export const SEARCH_PRODUCTS = gql`
  query clientProductSearch($limit: Int!, $offset: Int!, $search: String) {
    clientProductSearch(limit: $limit, offset: $offset, search: $search) {
      price
      product_name
      slug
      image
    }
  }
`;

export const ORDER_LIST = gql`
  query clientOrderList($limit: Int!, $offset: Int!, $status: String) {
    clientOrderList(limit: $limit, offset: $offset, status: $status) {
      data {
        id
        order_date
        order_time
        sub_total
        total
        is_paid
        status
      }
      pagination {
        total
        current
        size
      }
    }
  }
`;

export const ORDER_DETAIL = gql`
  query clientOrderDetail($id: Int!) {
    clientOrderDetail(id: $id) {
      id
      order_date
      order_time
      sub_total
      total
      address
      phone_number
      status
      order_items {
        qty
        unit_price
        sub_total
        property {
          property
          product_id
          image_url
          product {
            product_name
          }
        }
      }
    }
  }
`;

export const UPLOAD = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file)
  }
`;

export const BANNERS = gql`
  query clientBannerList($limit: Int!, $offset: Int!) {
    clientBannerList(limit: $limit, offset: $offset) {
      title
      subtitle
      image
      url_button
    }
  }
`;
