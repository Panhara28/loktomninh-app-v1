import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import NavbarLayout from "@component/layout/NavbarLayout";
import PageContent from "@component/PageContent";
import ProductCard1 from "@component/product-cards/ProductCard1";
import { SEO } from "@component/Seo";
import { reverseSlug } from "functions/reverseSlug";
import { clientRequireToken } from "lib/apollo";
import { SEARCH_PRODUCTS } from "lib/graph";
import React from "react";

const ProductSearch = ({ items }) => {
  let renderProduct;

  renderProduct = items.product.map((product, ind) => {
    return (
      <Grid item lg={3} sm={6} xs={12} key={ind}>
        <ProductCard1 {...product} />
      </Grid>
    );
  });

  return (
    <>
      <Box pt="20px">
        <Grid container spacing={6}>
          <Grid item lg={12} xs={12}>
            <Grid container spacing={6} style={{ marginBottom: 50 }}>
              {items.product.length === 0 ? (
                <div>No Result</div>
              ) : (
                renderProduct
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

const SearchPage = (props) => {
  return (
    <>
      <SEO title="Explore Product" />
      <PageContent>
        <NavbarLayout>
          <ProductSearch items={props} />
        </NavbarLayout>
      </PageContent>
    </>
  );
};

export async function getServerSideProps(params) {
  const { product_name } = params.query;
  const { data } = await clientRequireToken().query({
    query: SEARCH_PRODUCTS,
    variables: {
      search: reverseSlug(product_name),
      limit: 1000,
      offset: 0,
    },
  });
  return {
    props: {
      product: data.clientProductSearch,
    },
  };
}

export default SearchPage;
