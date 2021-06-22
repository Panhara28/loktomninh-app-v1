import { useMutation, useQuery } from "@apollo/client";
import Avatar from "@component/avatar/Avatar";
import Box from "@component/Box";
import Button from "@component/buttons/Button";
import { Card1 } from "@component/Card1";
import Divider from "@component/Divider";
import FlexBox from "@component/FlexBox";
import { ContactsForm } from "@component/Form/ContactsForm";
import { DeliveryForm } from "@component/Form/DeliveryForm";
import { AddressContainer } from "@component/Form/profile.styled";
import Grid from "@component/grid/Grid";
import AppLayout from "@component/layout/AppLayout";
import { NoCart } from "@component/nocart";
import ProductCard7 from "@component/product-cards/ProductCard7";
import Typography from "@component/Typography";
import { AuthContext } from "@context/app/Auth";
import { CHECKOUT, GET_CUSTOMER_LOGGED } from "lib/graph";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { useRouter } from "next/router";
import React, { Fragment, ReactNode, useState } from "react";
import { useContext } from "react";
import { useCart } from "react-use-cart";
import { UploadImage } from "@component/upload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import style from "./styles.module.scss";

const Cart = () => {
  const router = useRouter();
  let uploadingImageNode: ReactNode;
  let imageNode: ReactNode;
  const [filename, setFilename] = useState<any>({});
  const { customer } = useContext(AuthContext);

  if (!customer) {
    router.push("/login");
  }

  const { items, cartTotal, emptyCart } = useCart();
  const [contacts, setContacts] = useState([
    { phone_number: "", active: false },
  ]);
  const [locations, setLocation] = useState([{ location: "", active: false }]);

  const [checkout] = useMutation(CHECKOUT, {
    onCompleted: () => {
      emptyCart();
      router.push("/thanks");
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
    if (items.length > 0) {
      checkout({
        variables: {
          input: dataCheckout,
          phone_number: phone_number[0].phone_number,
          address: location[0].location,
          aba_image: filename?.src,
        },
      });
    } else {
      router.push("/cart");
      toastr.warning("No item in the cart");
    }
  };

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

  // Handle Image Uploading
  if (filename.loading) {
    uploadingImageNode = (
      <div className={style.imageUploadingContainer}>
        <div className={style.imageUploading}>
          <FontAwesomeIcon icon={faCog} spin={true} /> Uploading...
        </div>
      </div>
    );
  }

  if (filename.src) {
    imageNode = (
      <div className={style.imageContainer}>
        <img className={style.image} src={filename.src} />
        <div
          className={style.imageRemove}
          onClick={() => {
            setFilename({});
          }}
        >
          <FontAwesomeIcon
            icon={faTimesCircle}
            style={{ color: "#e74c3c", fontSize: 30 }}
          />
        </div>
        {uploadingImageNode}
      </div>
    );
  }

  if (loading || data === undefined) return <></>;

  return (
    <Fragment>
      <Grid container className="mt-3 mx-2">
        <Grid item lg={8} md={8} xs={12}>
          {items.length > 0 ? <div></div> : <NoCart />}
          {items &&
            items.map((item) => {
              return <ProductCard7 key={item.id} mb="1.5rem" {...item} />;
            })}
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <Card1>
            <FlexBox
              justifyContent="space-between"
              alignItems="center"
              mb="1rem"
            >
              <Typography color="gray.600">Total:</Typography>
              <FlexBox alignItems="flex-end">
                <Typography fontSize="18px" fontWeight="600" lineHeight="1">
                  $
                </Typography>
                <Typography fontWeight="600" fontSize="14px" lineHeight="1">
                  {cartTotal.toFixed(2)}
                </Typography>
              </FlexBox>
            </FlexBox>

            <Divider mt="1rem" />

            <Box mt="1rem">
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
              <div style={{ display: filename.src ? "none" : "inline-block" }}>
                <UploadImage
                  onSuccess={(e) => {
                    setFilename(e);
                  }}
                />
              </div>

              {imageNode}
            </Box>

            <Divider mt="1rem" />

            <Box mt="1rem">
              <FlexBox alignItems="center" mb="1.75rem">
                <Avatar
                  bg="primary.main"
                  size={32}
                  color="primary.text"
                  mr="0.875rem"
                >
                  2
                </Avatar>
                <Typography fontSize="20px">Delivery Details</Typography>
              </FlexBox>
              <AddressContainer>
                <DeliveryForm
                  input={locations}
                  setInput={setLocation}
                  isShow={true}
                />
              </AddressContainer>
            </Box>

            <Divider mt="1rem" />

            <Box mt="1rem">
              <FlexBox alignItems="center" mb="1.75rem">
                <Avatar
                  bg="primary.main"
                  size={32}
                  color="primary.text"
                  mr="0.875rem"
                >
                  3
                </Avatar>
                <Typography fontSize="20px">Personal Details</Typography>
              </FlexBox>
              <AddressContainer>
                <ContactsForm
                  input={contacts}
                  setInput={setContacts}
                  isShow={true}
                />
              </AddressContainer>
            </Box>

            <Button
              variant="contained"
              color="primary"
              fullwidth
              mb="100px"
              mt="20px"
              onClick={onCheckout}
              disabled={filename?.src ? false : true}
            >
              Checkout Now
            </Button>
          </Card1>
        </Grid>
      </Grid>
    </Fragment>
  );
};

Cart.layout = AppLayout;

export default Cart;
