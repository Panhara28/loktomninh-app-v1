import React from "react";
import CategorySectionHeader from "../CategorySectionHeader";
import Container from "../Container";
import Grid from "../grid/Grid";
import ProductCard1 from "../product-cards/ProductCard1";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_LIST } from "lib/graph";
import { useOnScreen } from "@hook/useOnScreen";
import MainCardPlaceholder from "@component/placeholder/MainCardPlaceholder";

const Section11: React.FC = () => {
  const { loading, data, fetchMore, error } = useQuery(GET_PRODUCT_LIST, {
    variables: {
      limit: 20,
      offset: 1,
    },
  });

  const [setRef, more, isLoading]: any = useOnScreen(
    { threshold: 1 },
    fetchMore
  );

  if (loading || data === undefined) return <></>;
  if (error) return <div>{`Error ${error}`}</div>;

  const mainCardPlaceholder = ["a"];

  return (
    <Container mb="70px">
      <CategorySectionHeader title="More For You" seeMoreLink="#" />
      <Grid container spacing={6}>
        {data &&
          data.clientProductList &&
          data.clientProductList.map((product, ind) => (
            <Grid item lg={3} md={4} sm={6} xs={6} key={ind}>
              <ProductCard1 price={23} off={25} hoverEffect {...product} />
            </Grid>
          ))}
      </Grid>
      {isLoading &&
        mainCardPlaceholder.map((val) => <MainCardPlaceholder key={val} />)}

      {!isLoading && more && (
        <div ref={setRef} style={{ backgroundColor: "transparent" }}></div>
      )}
    </Container>
  );
};

export default Section11;
