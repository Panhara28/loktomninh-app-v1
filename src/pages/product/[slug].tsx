import Box from "@component/Box";
import FlexBox from "@component/FlexBox";
import NavbarLayout from "@component/layout/NavbarLayout";
import ProductDescription from "@component/products/ProductDescription";
import ProductIntro from "@component/products/ProductIntro";
import { H5 } from "@component/Typography";
import { GET_PRODUCT } from "lib/graph";
import React, { useState } from "react";
import { SEO } from "@component/Seo";
import { clientRequireToken } from "lib/apollo";

const ProductDetails = ({ product }) => {

  const [selectedOption, setSelectedOption] = useState("description");

  const handleOptionClick = (opt) => () => {
    setSelectedOption(opt);
  };

  return (
    <>
      <SEO
        title={product.product_name}
        description={product.description.replace(
          /<[^>]+>/g,
          ""
        )}
        image={product.properties[0].image_url}
        canonical={`https://loktomninh.com/product/${product.slug}`}
      />
      <ProductIntro {...product} />
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
                description={product.description}
              />
            </div>
          )}
        </Box>
      </div>
    </>
  );
};

export async function getServerSideProps(params) {
  const { slug } = params.query;

  const { data } = await clientRequireToken().query({
    query: GET_PRODUCT,
    variables: {
      slug,
    },
  })

  return {
    props: {
      product: data.clientProductDetail
    }
  };
}

ProductDetails.layout = NavbarLayout;

export default ProductDetails;
