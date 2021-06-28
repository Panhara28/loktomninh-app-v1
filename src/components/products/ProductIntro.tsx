import LazyImage from "@component/LazyImage";
import React, { useState } from "react";
import Box from "../Box";
import Button from "../buttons/Button";
import FlexBox from "../FlexBox";
import Grid from "../grid/Grid";
import Icon from "../icon/Icon";
import { H1, H2, H3, SemiSpan } from "../Typography";
import { useCart } from "react-use-cart";

export interface ProductIntroProps {
  properties?: any[];
  product_name: string;
  id?: string | number;
  product_type: string | null;
}

const ProductIntro: React.FC<ProductIntroProps> = ({
  product_name,
  properties,
  product_type
}) => {
  const { addItem, inCart, updateItemQuantity, items } = useCart();
  const images = properties.map((x) => x.image_url);
  const minPrice = Math.min(...properties.map((x) => Number(x.price)));
  const maxPrice = Math.max(...properties.map((x) => Number(x.price)));
  const priceRange =
    minPrice === maxPrice
      ? minPrice.toFixed(2)
      : `${minPrice.toFixed(2)}$ - ${maxPrice.toFixed(2)}`;
  const [price, setPrice] = useState(priceRange);
  const [image, setImage] = useState(images[0]);
  const [optionIdx, setOptionIdx] = useState(0);
  const [, setActiveClass] = useState(true);
  const alreadyAddToCart = inCart(
    properties[optionIdx === -1 ? 0 : optionIdx]?.id
  );

  const [sku, setSku] = useState(
    properties && properties.map((x) => {
      const index = items.findIndex((item) => item.id === x.id);
      return {
        ...x,
        qty: Number(items[index]?.quantity || 0),
      };
    })
  );

  const onChangeImage = (idx, optionIdx, price, image_url) => {
    setOptionIdx(idx);
    setPrice(Number(price).toFixed(2));
    setActiveClass(optionIdx === idx);
    setImage(image_url);
  };

  const RenderAddToCart = ({ index }: { index: number }) => {
    return (
      <>
        {!alreadyAddToCart ? (
          <Button
            variant="contained"
            size="small"
            color="primary"
            mb="36px"
            mt="36px"
            onClick={() => {
              addItem(properties[optionIdx === -1 ? 0 : optionIdx], 1);
              const items = [...sku];
              items[index].qty = 1;
              setSku(items);
            }}
          >
            Add to Cart
          </Button>
        ) : (
          <FlexBox alignItems="center" mb="36px" mt="32px">
            <Button
              p="9px"
              variant="outlined"
              size="small"
              color="primary"
              onClick={() => {
                const items = [...sku];
                items[index].qty--;
                setSku(items);

                items[index].qty === 1
                  ? null
                  : updateItemQuantity(
                    properties[optionIdx === -1 ? 0 : optionIdx].id,
                    items[index].qty === 1 ? 0 : items[index].qty
                  );
              }}
            >
              <Icon variant="small">minus</Icon>
            </Button>
            <H3 fontWeight="600" mx="20px">
              {sku[index].qty}
            </H3>
            <Button
              p="9px"
              variant="outlined"
              size="small"
              color="primary"
              onClick={() => {
                const items = [...sku];
                items[index].qty++;
                setSku(items);
                updateItemQuantity(
                  properties[optionIdx === -1 ? 0 : optionIdx].id,
                  items[index].qty
                );
              }}
            >
              <Icon variant="small">plus</Icon>
            </Button>
          </FlexBox>
        )}
      </>
    );
  };

  return (
    <Box overflow="hidden">
      <Grid container justifyContent="center" spacing={10}>
        <Grid item md={6} xs={12} alignItems="center">
          <Box>
            <FlexBox justifyContent="center" mb="20px">
              <LazyImage
                src={image}
                alt={product_name}
                height="300px"
                width="auto"
                loading="eager"
                objectFit="contain"
                priority={true}
                unoptimized={true}
              />
            </FlexBox>
          </Box>
        </Grid>

        <Grid item md={6} xs={12} alignItems="center">
          <H1 mb="1rem">{product_name}</H1>

          <Box mb="24px">
            <H2 color="primary.main" mb="10px" lineHeight="1">
              {price}$
            </H2>

            {
              product_type === "STOCK" ? (<SemiSpan color="inherit">Stock Available</SemiSpan>) : (<SemiSpan color="inherit">2 weeks preorder</SemiSpan>)
            }

            <FlexBox overflow="auto" mt="30px">
              {sku.map((property, idx) => {
                return (
                  <Button
                    className="button-link"
                    variant="contained"
                    color="primary"
                    p="1rem 1.5rem"
                    mr="1rem"
                    onClick={() =>
                      onChangeImage(
                        idx,
                        optionIdx,
                        property.price,
                        property.image_url
                      )
                    }
                  >
                    {property.property}
                  </Button>
                );
              })}
            </FlexBox>

            {sku.map((_, index) => {
              if (optionIdx !== index) return <div />;
              return (
                <div key={index}>
                  <RenderAddToCart index={index} />
                </div>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductIntro;
