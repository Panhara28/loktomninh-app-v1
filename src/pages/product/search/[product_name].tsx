import { useQuery } from "@apollo/client";
import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import NavbarLayout from "@component/layout/NavbarLayout";
import ProductCard1 from "@component/product-cards/ProductCard1";
import { reverseSlug } from "functions/reverseSlug";
import { SEARCH_PRODUCTS } from "lib/graph";
import React from "react";

const ProductSearch = (props) => {
  const { loading, error, data } = useQuery(SEARCH_PRODUCTS, {
    variables: {
      search: reverseSlug(props.product_name),
      limit: 1000,
      offset: 0,
    },
  });

  if (loading || data === undefined) return <></>;

  if (error) return `Error! ${error}`;

  let renderProduct;

  renderProduct =
    data &&
    data?.clientProductSearch.map((product, ind) => {
      return (
        <Grid item lg={3} sm={6} xs={12} key={ind}>
          <ProductCard1 {...product} />
        </Grid>
      );
    });

  return (
    <Box pt="20px">
      <Grid container spacing={6}>
        <Grid item lg={12} xs={12}>
          <Grid container spacing={6}>
            {data?.clientProductSearch.length === 0 ? (
              <div>No Result</div>
            ) : (
              renderProduct
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export function getServerSideProps(params) {
  const product_name = params.query;

  return { props: product_name };
}

ProductSearch.layout = NavbarLayout;

export default ProductSearch;
