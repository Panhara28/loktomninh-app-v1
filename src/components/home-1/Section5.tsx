import Card from "@component/Card";
import React from "react";
import CategorySectionCreator from "../CategorySectionCreator";
import Grid from "../grid/Grid";
import ProductCard2 from "../product-cards/ProductCard2";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_LIST } from "lib/graph";

const Section5: React.FC = () => {
  const { loading, data } = useQuery(GET_PRODUCT_LIST, {
    variables: {
      limit: 20,
      offset: 1,
    },
  });

  if (loading || data === undefined) return <></>;

  return (
    <CategorySectionCreator
      iconName="new-product-1"
      title="New Arrivals"
      seeMoreLink="#"
    >
      <Card p="1rem">
        <Grid container spacing={6}>
          {data &&
            data.clientProductList &&
            data.clientProductList.map((product) => {
              return (
                <Grid
                  item
                  lg={2}
                  md={3}
                  sm={4}
                  xs={6}
                  key={product.product_name}
                >
                  <ProductCard2 {...product} />
                </Grid>
              );
            })}
        </Grid>
      </Card>
    </CategorySectionCreator>
  );
};

export default Section5;
