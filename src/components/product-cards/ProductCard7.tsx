import Box from "@component/Box";
import Image from "@component/Image";
import { reverseSlug } from "functions/reverseSlug";
import Link from "next/link";
import React from "react";
import { useCart } from "react-use-cart";
import { SpaceProps } from "styled-system";
import Button from "../buttons/Button";
import IconButton from "../buttons/IconButton";
import FlexBox from "../FlexBox";
import Icon from "../icon/Icon";
import Typography from "../Typography";
import { StyledProductCard7 } from "./ProductCardStyle";

export interface ProductCard7Props {
  id?: string | any;
  quantity?: number;
  price?: number;
  image_url?: string;
  slug?: string;
}

const ProductCard7: React.FC<ProductCard7Props & SpaceProps> = ({
  id,
  quantity,
  price,
  image_url,
  slug,
  ...props
}) => {
  const { updateItemQuantity, removeItem } = useCart();
  return (
    <StyledProductCard7 {...props}>
      <Image
        src={image_url || "/assets/images/products/iphone-xi.png"}
        display="block"
        alt={slug}
        style={{ width: "100%" }}
      />
      <FlexBox
        className="product-details"
        flexDirection="column"
        justifyContent="space-between"
        minWidth="0px"
        width="100%"
      >
        <Link href={`/product/${id}`}>
          <a>
            <Typography
              className="title"
              fontWeight="600"
              fontSize="18px"
              mb="0.5rem"
            >
              {reverseSlug(slug)}
            </Typography>
          </a>
        </Link>
        <Box position="absolute" right="1rem" top="1rem">
          <IconButton
            padding="4px"
            ml="12px"
            size="small"
            onClick={() => removeItem(id)}
          >
            <Icon size="1.25rem">close</Icon>
          </IconButton>
        </Box>

        <FlexBox
          // width="100%"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <FlexBox flexWrap="wrap" alignItems="center">
            <Typography color="gray.600" mr="0.5rem">
              ${Number(price).toFixed(2)} x {Number(quantity)}
            </Typography>
            <Typography fontWeight={600} color="primary.main" mr="1rem">
              ${(Number(price) * Number(quantity)).toFixed(2)}
            </Typography>
          </FlexBox>

          <FlexBox alignItems="center">
            <Button
              variant="outlined"
              color="primary"
              padding="5px"
              size="none"
              borderColor="primary.light"
              onClick={() => {
                updateItemQuantity(id, quantity - 1);
              }}
              disabled={quantity === 1}
            >
              <Icon variant="small">minus</Icon>
            </Button>
            <Typography mx="0.5rem" fontWeight="600" fontSize="15px">
              {quantity}
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              padding="5px"
              size="none"
              borderColor="primary.light"
              onClick={() => {
                updateItemQuantity(id, quantity + 1);
              }}
            >
              <Icon variant="small">plus</Icon>
            </Button>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </StyledProductCard7>
  );
};

export default ProductCard7;
