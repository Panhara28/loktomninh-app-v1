import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import NavbarLayout from "@component/layout/NavbarLayout";
import PageContent from "@component/PageContent";
import ProductCard1 from "@component/product-cards/ProductCard1";
import { SEO } from "@component/Seo";

import { clientRequireToken } from "lib/apollo";
import { GET_CATEGORY_LIST_DETAIL } from "lib/graph";
import React from "react";


const CategoryDetail = ({ item }) => {
  console.log(item);

  // const [setRef, more, isLoading]: any = useOnScreenCategory(
  //   { threshold: 1 },
  //   fetchMore
  // );

  let renderProduct;

  renderProduct =
    item.product.map((product, ind) => {
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
            {renderProduct}
          </Grid>
          {/* {isLoading && (
            <div style={{ textAlign: "center", marginTop: 30 }}>
              <BeatLoader color={"#E94560"} loading={isLoading} size={15} />
            </div>
          )}

          {!isLoading && more && (
            <div ref={setRef} style={{ backgroundColor: "transparent" }}></div>
          )} */}
        </Grid>
      </Grid>
    </Box>

  );
};

const CategoryPage = (props) => {
  return (
    <>
      <SEO />
      <PageContent>
        <NavbarLayout>
          <CategoryDetail item={props} />
        </NavbarLayout>
      </PageContent>
    </>
  )
}

export async function getServerSideProps(params) {
  const { slug } = params.query;

  const { data } = await clientRequireToken().query({
    query: GET_CATEGORY_LIST_DETAIL,
    variables: {
      slug,
      limit: 20,
      offset: 0
    }
  })

  return {
    props: {
      product: data.clientCategoryDetail.product
    }
  };
}


export default CategoryPage;
