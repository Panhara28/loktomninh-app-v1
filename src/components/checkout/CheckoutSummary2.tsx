import Box from "@component/Box";
import Button from "@component/buttons/Button";
import React from "react";
import Divider from "../Divider";
import FlexBox from "../FlexBox";
import Typography, { Span } from "../Typography";
import { useCart } from "react-use-cart";
const CheckoutSummary2: React.FC = () => {
  const { items, cartTotal } = useCart();
  return (
    <Box>
      <Typography color="secondary.900" fontWeight="700" mb="1.5rem">
        Your order
      </Typography>

      {items.map((item) => (
        <FlexBox
          justifyContent="space-between"
          alignItems="center"
          mb="1.5rem"
          key={item.slug}
        >
          <Typography>
            <Span fontWeight="700" fontSize="14px">
              {item.quantity}
            </Span>{" "}
            x {item.slug}
          </Typography>
          <Typography>${(10).toFixed(2)}</Typography>
        </FlexBox>
      ))}

      <Divider bg="gray.300" mb="1.5rem" />

      <FlexBox justifyContent="space-between" alignItems="center" mb="0.5rem">
        <Typography color="text.hint">Subtotal:</Typography>
        <Typography fontWeight="700">${cartTotal.toFixed(2)}</Typography>
      </FlexBox>

      <FlexBox justifyContent="space-between" alignItems="center" mb="0.5rem">
        <Typography color="text.hint">Delivery:</Typography>
        <Typography fontWeight="700">Free</Typography>
      </FlexBox>

      <FlexBox justifyContent="space-between" alignItems="center" mb="1.5rem">
        <Typography color="text.hint">Discount:</Typography>
        <Typography fontWeight="700">$0.00</Typography>
      </FlexBox>

      <Divider bg="gray.300" mb="0.5rem" />

      <FlexBox
        fontWeight="700"
        justifyContent="space-between"
        alignItems="center"
        mb="0.5rem"
      >
        <Typography>Total:</Typography>
        <Typography fontWeight="700">${cartTotal.toFixed(2)}</Typography>
      </FlexBox>
      <Button
        variant="contained"
        color="primary"
        mt="1.5rem"
        type="submit"
        fullwidth
      >
        Place Order
      </Button>
    </Box>
  );
};

export default CheckoutSummary2;
