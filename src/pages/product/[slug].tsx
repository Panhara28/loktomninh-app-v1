import Box from "@component/Box";
import FlexBox from "@component/FlexBox";
import NavbarLayout from "@component/layout/NavbarLayout";
import ProductDescription from "@component/products/ProductDescription";
import ProductIntro from "@component/products/ProductIntro";
import { H5 } from "@component/Typography";
import { GET_PRODUCT } from "lib/graph";
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { SEO } from "@component/Seo";
const ProductDetails = ({ slug }) => {
  const { data, loading } = useQuery(GET_PRODUCT, {
    variables: {
      slug,
    },
  });

  const [selectedOption, setSelectedOption] = useState("description");

  const handleOptionClick = (opt) => () => {
    setSelectedOption(opt);
  };

  if (loading || data === undefined) return <div></div>;

  return (
    <>
      <SEO
        title={data.clientProductDetail.product_name}
        description={data.clientProductDetail.description.replace(
          /<[^>]+>/g,
          ""
        )}
        image={data.clientProductDetail.properties[0].image_url}
        canonical={`https://loktomninh.com/product/${data.clientProductDetail.slug}`}
      />
      <ProductIntro {...data.clientProductDetail} />
      <div>
        <FlexBox
          borderBottom="1px solid"
          borderColor="gray.400"
          mt="20px"
          mb="26px"
        >
          <H5
            className="cursor-pointer"
            mr="25px"
            p="4px 10px"
            color={
              selectedOption === "description" ? "primary.main" : "text.muted"
            }
            borderBottom={selectedOption === "description" && "2px solid"}
            borderColor="primary.main"
            onClick={handleOptionClick("description")}
          >
            Description
          </H5>
        </FlexBox>

        <Box mb="100px">
          {selectedOption === "description" && (
            <div className="product-description">
              <ProductDescription
                description={data.clientProductDetail.description}
              />
            </div>
          )}
        </Box>
      </div>
    </>
  );
};

export function getServerSideProps(params) {
  const slug = params.query;

  return { props: slug };
}

ProductDetails.layout = NavbarLayout;

export default ProductDetails;
