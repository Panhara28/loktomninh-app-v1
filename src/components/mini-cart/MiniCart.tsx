import Avatar from "@component/avatar/Avatar";
import FlexBox from "@component/FlexBox";
import LazyImage from "@component/LazyImage";
import Link from "next/link";
import React, { Fragment } from "react";
import Button from "../buttons/Button";
import Divider from "../Divider";
import Icon from "../icon/Icon";
import Typography, { H5, Paragraph, Tiny } from "../Typography";
import { StyledMiniCart } from "./MiniCartStyle";
import { useCart } from "react-use-cart";
type MiniCartProps = {
  toggleSidenav?: () => void;
};

const MiniCart: React.FC<MiniCartProps> = ({ toggleSidenav }) => {
  const { totalUniqueItems, items, updateItemQuantity, removeItem, cartTotal } =
    useCart();

  return (
    <StyledMiniCart>
      <div className="cart-list">
        <FlexBox alignItems="center" m="0px 20px" height="74px">
          <Icon size="1.75rem">bag</Icon>
          <Typography fontWeight={600} fontSize="16px" ml="0.5rem">
            {totalUniqueItems} item
          </Typography>
        </FlexBox>

        <Divider />

        {!!!items.length && (
          <FlexBox
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="calc(100% - 80px)"
          >
            <LazyImage
              src="/assets/images/logos/shopping-bag.svg"
              width="90px"
              height="100%"
            />
            <Paragraph
              mt="1rem"
              color="text.muted"
              textAlign="center"
              maxWidth="200px"
            >
              Your shopping bag is empty. Start shopping
            </Paragraph>
          </FlexBox>
        )}
        {items.map((item) => (
          <Fragment key={item.id}>
            <div className="cart-item">
              <FlexBox alignItems="center" flexDirection="column">
                <Button
                  variant="outlined"
                  color="primary"
                  padding="5px"
                  size="none"
                  borderColor="primary.light"
                  borderRadius="300px"
                  onClick={() => {
                    updateItemQuantity(item.id, item.quantity + 1);
                  }}
                >
                  <Icon variant="small">plus</Icon>
                </Button>
                <Typography fontWeight={600} fontSize="15px" my="3px">
                  {item.itemTotal}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  padding="5px"
                  size="none"
                  borderColor="primary.light"
                  borderRadius="300px"
                  disabled={item.quantity === 1}
                  onClick={() => {
                    updateItemQuantity(item.id, item.quantity - 1);
                  }}
                >
                  <Icon variant="small">minus</Icon>
                </Button>
              </FlexBox>

              <Link href={`/product/${item.id}`}>
                <a>
                  <Avatar
                    src={
                      item.image_url || "/assets/images/products/iphone-x.png"
                    }
                    mx="1rem"
                    alt={item.product_name}
                    size={76}
                  />
                </a>
              </Link>

              <div className="product-details">
                <Link href={`/product/${item.slug}`}>
                  <a>
                    <H5 className="title" fontSize="14px">
                      {item.product_name}
                    </H5>
                  </a>
                </Link>
                <Tiny color="text.muted">
                  ${Number(item.price).toFixed(2)} x {item.quantity}
                </Tiny>
                <Typography
                  fontWeight={600}
                  fontSize="14px"
                  color="primary.main"
                  mt="4px"
                >
                  ${(Number(item.quantity) * Number(item.price)).toFixed(2)}
                </Typography>
              </div>

              <Icon
                className="clear-icon"
                size="1rem"
                ml="1.25rem"
                onClick={() => removeItem(item.id)}
              >
                close
              </Icon>
            </div>
            <Divider />
          </Fragment>
        ))}
      </div>

      {!!items.length && (
        <Fragment>
          <Link href="/checkout">
            <Button
              variant="contained"
              color="primary"
              m="1rem 1rem 0.75rem"
              onClick={toggleSidenav}
            >
              <Typography fontWeight={600}>
                Checkout Now (${cartTotal.toFixed(2)})
              </Typography>
            </Button>
          </Link>
          <Link href="/cart">
            <Button
              color="primary"
              variant="outlined"
              m="0px 1rem 0.75rem"
              onClick={toggleSidenav}
            >
              <Typography fontWeight={600}>View Cart</Typography>
            </Button>
          </Link>
        </Fragment>
      )}
    </StyledMiniCart>
  );
};

MiniCart.defaultProps = {
  toggleSidenav: () => {},
};

export default MiniCart;
