import LazyImage from "@component/LazyImage";
import Link from "next/link";
import React from "react";
import { CSSProperties } from "styled-components";
import Box from "../Box";
import { CardProps } from "../Card";
import FlexBox from "../FlexBox";
import Icon from "../icon/Icon";
import { H3, SemiSpan } from "../Typography";
import { StyledProductCard1 } from "./ProductCardStyle";

export interface ProductCard1Props extends CardProps {
  className?: string;
  style?: CSSProperties;
  product_name?: string;
  slug?: string;
  image?: any[];
  id?: number;
  price?: string;
}

const ProductCard1: React.FC<ProductCard1Props> = ({
  product_name,
  image,
  slug,
  id,
  price,
  ...props
}) => {
  const primaryImage = image?.filter((image) => image.isPrimary === true)[0];
  return (
    <StyledProductCard1 {...props}>
      <div className="image-holder">
        <FlexBox className="extra-icons">
          <Link href={`/product/${slug}`}>
            <a>
              <Icon color="secondary" variant="small" mb="0.5rem">
                eye-alt
              </Icon>
            </a>
          </Link>
        </FlexBox>

        <Link href={`/product/${slug}`}>
          <a>
            <LazyImage
              src={
                primaryImage ? primaryImage.preview : "/imagePlaceholder.png"
              }
              width="60%"
              height="auto"
              layout="responsive"
              alt={product_name}
              priority={true}
              unoptimized={true}
            />
          </a>
        </Link>
      </div>
      <div className="details">
        <FlexBox>
          <Box flex="1 1 0" minWidth="0px" mr="0.5rem">
            <Link href={`/product/${slug}`}>
              <a>
                <H3
                  className="title"
                  fontSize="14px"
                  textAlign="left"
                  fontWeight="600"
                  color="text.secondary"
                  mb="10px"
                  title={product_name}
                >
                  {product_name}
                </H3>
              </a>
            </Link>

            <FlexBox alignItems="center" mt="10px">
              <SemiSpan pr="0.5rem" fontWeight="600" color="primary.main">
                ${Number(price).toFixed(2)}
              </SemiSpan>
            </FlexBox>
          </Box>
        </FlexBox>
      </div>
    </StyledProductCard1>
  );
};

export default ProductCard1;
