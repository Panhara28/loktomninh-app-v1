import Box from "@component/Box";
import React, { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Carousel from "../carousel/Carousel";
import CategorySectionCreator from "../CategorySectionCreator";

const Section2: React.FC = () => {
  const [visibleSlides, setVisibleSlides] = useState(4);
  const width = useWindowSize();

  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(4);
  }, [width]);

  return (
    <CategorySectionCreator
      iconName="light"
      title="Flash Deals"
      seeMoreLink="#"
    >
      <Box mt="-0.25rem" mb="-0.25rem">
        <Carousel totalSlides={10} visibleSlides={visibleSlides}>
          {/* {productList.map((item, ind) => (
            <Box py="0.25rem" key={ind}>
              <ProductCard1
                id={ind}
                image={item.image}
                key={ind}
                product_name={item.product_name}
                properties={item.properties}
                slug={item.slug}
              />
            </Box>
          ))} */}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  );
};

export default Section2;
