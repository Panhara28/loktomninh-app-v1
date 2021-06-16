import { useQuery } from "@apollo/client";
import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import NavbarLayout from "@component/layout/NavbarLayout";
import ProductCard1 from "@component/product-cards/ProductCard1";
import { useOnScreenCategory } from "@hook/useOnScreenCategory";
import { GET_CATEGORY_LIST_DETAIL } from "lib/graph";
import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

const CategoryDetail = (props) => {
  const { loading, error, fetchMore, data } = useQuery(
    GET_CATEGORY_LIST_DETAIL,
    {
      variables: {
        slug: props.slug,
        limit: 20,
        offset: 0,
      },
    }
  );

  const [setRef, more, isLoading]: any = useOnScreenCategory(
    { threshold: 1 },
    fetchMore
  );

  if (loading || data === undefined) return <></>;

  if (error) return `Error! ${error}`;

  let renderProduct;

  renderProduct =
    data &&
    data?.clientCategoryDetail?.product.map((product, ind) => {
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
          {isLoading && (
            <div style={{ textAlign: "center", marginTop: 30 }}>
              <BeatLoader color={"#E94560"} loading={isLoading} size={15} />
            </div>
          )}

          {!isLoading && more && (
            <div ref={setRef} style={{ backgroundColor: "transparent" }}></div>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export function getServerSideProps(params) {
  const slug = params.query;

  return { props: slug };
}

CategoryDetail.layout = NavbarLayout;

export default CategoryDetail;
