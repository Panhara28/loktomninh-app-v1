import { useQuery } from "@apollo/client";
import Box from "@component/Box";
import ProductCard1 from "@component/product-cards/ProductCard1";
import { GET_CATEGORY_LIST } from "lib/graph";
import React, { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Carousel from "../carousel/Carousel";
import CategorySectionCreator from "../CategorySectionCreator";

const Section2: React.FC = () => {
  const { data, loading } = useQuery(GET_CATEGORY_LIST, {
    variables: {
      limit: 8,
      offset: 1,
      slug: "",
    },
  });

  const [visibleSlides, setVisibleSlides] = useState(4);
  const width = useWindowSize();

  useEffect(() => {
    if (width < 500) setVisibleSlides(2);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(6);
  }, [width]);

  if (loading || !data) return <></>;

  return (
    <>
      {data &&
        data?.clientCategoryList.map((category) => {
          if (category.product.length === 0) {
            return <div></div>;
          }

          return (
            <CategorySectionCreator
              title={category.category_name}
              seeMoreLink={`/category/${category.slug}`}
            >
              <Box mt="-0.25rem" mb="-0.25rem">
                <Carousel totalSlides={12} visibleSlides={visibleSlides}>
                  {category?.product.map((item, ind) => {
                    return (
                      <Box py="0.25rem" key={ind}>
                        <ProductCard1
                          id={ind}
                          image={item.image}
                          key={ind}
                          product_name={item.product_name}
                          slug={item.slug}
                          price={item.price}
                        />
                      </Box>
                    );
                  })}
                </Carousel>
              </Box>
            </CategorySectionCreator>
          );
        })}
    </>
  );
};

export default Section2;
