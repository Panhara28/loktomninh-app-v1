import Avatar from "@component/avatar/Avatar";
import Box from "@component/Box";
import FlexBox from "@component/FlexBox";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from "../buttons/Button";
import { Card1 } from "../Card1";
import Grid from "../grid/Grid";
import Typography, { Span } from "../Typography";
import { useMutation, useQuery } from "@apollo/client";
import { useCart } from "react-use-cart";
import { CHECKOUT, GET_CUSTOMER_LOGGED } from "lib/graph";
import { DeliveryForm } from "@component/Form/DeliveryForm";
import { AddressContainer } from "@component/Form/profile.styled";
import { ContactsForm } from "@component/Form/ContactsForm";
import Divider from "@component/Divider";

const CheckoutForm2 = () => {
  const router = useRouter();
  const [contacts, setContacts] = useState([
    { phone_number: "", active: false },
  ]);
  const [locations, setLocation] = useState([{ location: "", active: false }]);
  const { emptyCart, items, isEmpty, cartTotal } = useCart();

  if (isEmpty) {
    router.push("/");
  }

  const [checkout] = useMutation(CHECKOUT, {
    onCompleted: () => {
      alert("Order Completed");
      emptyCart();
    },
  });

  const { data, loading } = useQuery(GET_CUSTOMER_LOGGED, {
    onCompleted: (data) => {
      setContacts(
        data.customerLogged?.contacts.map((contact) => {
          return {
            id: contact.id,
            phone_number: contact.phone_number,
            active: contact.active,
          };
        })
      );
      setLocation(
        data.customerLogged?.locations.map((local) => {
          return {
            id: local.id,
            location: local.location,
            active: local.active,
          };
        })
      );
    },
  });

  const dataCheckout: any[] = [];

  items.map((x) => {
    dataCheckout.push({
      product_id: x.id,
      qty: x.quantity,
    });
  });

  const location = locations?.filter((x) => x.active === true);

  const phone_number = contacts?.filter((x) => x.active === true);

  const onCheckout = () => {
    checkout({
      variables: {
        input: dataCheckout,
        phone_number: phone_number[0].phone_number,
        address: location[0].location,
      },
    });
  };

  if (loading || data === undefined) return <></>;

  return (
    <Grid container spacing={6}>
      <Grid item lg={8} md={8} xs={12}>
        <form>
          <Card1 mb="1.5rem">
            <FlexBox alignItems="center" mb="1.75rem">
              <Avatar
                bg="primary.main"
                size={32}
                color="primary.text"
                mr="0.875rem"
              >
                1
              </Avatar>
              <Typography fontSize="20px">Delivery Details</Typography>
            </FlexBox>

            <Typography mb="0.75rem">Delivery Address</Typography>
            <Grid container spacing={6}>
              <AddressContainer>
                <DeliveryForm
                  input={locations}
                  setInput={setLocation}
                  isShow={true}
                />
              </AddressContainer>
            </Grid>
          </Card1>
          <Card1 mb="1.5rem">
            <FlexBox alignItems="center" mb="1.75rem">
              <Avatar
                bg="primary.main"
                size={32}
                color="primary.text"
                mr="0.875rem"
              >
                2
              </Avatar>
              <Typography fontSize="20px">Personal Details</Typography>
            </FlexBox>

            <Typography mb="0.75rem">Contact</Typography>
            <Grid container spacing={6}>
              <AddressContainer>
                <ContactsForm
                  input={contacts}
                  setInput={setContacts}
                  isShow={true}
                />
              </AddressContainer>
            </Grid>
          </Card1>
          <Card1 mb="1.5rem">
            <FlexBox alignItems="center" mb="1.75rem">
              <Avatar
                bg="primary.main"
                size={32}
                color="primary.text"
                mr="0.875rem"
              >
                3
              </Avatar>
              <Typography fontSize="20px">Payment Details</Typography>
            </FlexBox>

            <Typography mb="0.75rem">Upload your ABA Screenshot</Typography>
            <Grid container spacing={6}>
              <AddressContainer>
                <ContactsForm
                  input={contacts}
                  setInput={setContacts}
                  isShow={true}
                />
              </AddressContainer>
            </Grid>
          </Card1>
        </form>
      </Grid>

      <Grid item lg={4} md={4} xs={12}>
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

          <FlexBox
            justifyContent="space-between"
            alignItems="center"
            mb="0.5rem"
          >
            <Typography color="text.hint">Subtotal:</Typography>
            <Typography fontWeight="700">${cartTotal.toFixed(2)}</Typography>
          </FlexBox>

          <FlexBox
            justifyContent="space-between"
            alignItems="center"
            mb="0.5rem"
          >
            <Typography color="text.hint">Delivery:</Typography>
            <Typography fontWeight="700">Free</Typography>
          </FlexBox>

          <FlexBox
            justifyContent="space-between"
            alignItems="center"
            mb="1.5rem"
          >
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
            onClick={onCheckout}
          >
            Place Order
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CheckoutForm2;
