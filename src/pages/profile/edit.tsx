import { useMutation, useQuery } from "@apollo/client";
import Box from "@component/Box";
import Button from "@component/buttons/Button";
import { Card1 } from "@component/Card1";
import { PanharaInput } from "@component/customs/input-styles";
import FlexBox from "@component/FlexBox";
import { ContactsForm } from "@component/Form/ContactsForm";
import { DeliveryForm } from "@component/Form/DeliveryForm";
import {
  AddressContainer,
  ContactContainer,
} from "@component/Form/profile.styled";
import Grid from "@component/grid/Grid";
import DashboardLayout from "@component/layout/CustomerDashboardLayout";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
import { SEO } from "@component/Seo";
import { AuthContext } from "@context/app/Auth";
import { GET_CUSTOMER_LOGGED, UPDATE_CUSTOMER } from "lib/graph";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

const ProfileEditor = () => {
  let nameDisplayInput;
  const router = useRouter();
  const { customer } = useContext(AuthContext);

  if (!customer) {
    router.push("/login");
  }

  const [contacts, setContacts] = useState([
    { phone_number: "", active: false },
  ]);
  const [locations, setLocation] = useState([{ location: "", active: false }]);

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

  const [updateCustomer] = useMutation(UPDATE_CUSTOMER, {
    onCompleted: () => {
      window.location.reload();
    },
  });

  const onUpdate = () => {
    updateCustomer({
      variables: {
        token: localStorage.getItem("token") || null,

        input: {
          nameDisplay: nameDisplayInput.value,
          contacts,
          locations,
        },
      },
    });
  };

  if (loading || data === undefined) return <div></div>;

  return (
    <>
      <SEO />
      <DashboardPageHeader
        iconName="user_filled"
        title="Edit Profile"
        button={
          <Link href="/">
            <Button color="primary" bg="primary.light" px="2rem">
              Back to Shopping
            </Button>
          </Link>
        }
      />

      <Card1>
        <FlexBox alignItems="flex-end" mb="22px">
          {/* <Avatar src="/assets/images/faces/ralph.png" size={64} /> */}

          {/* <Box ml="-20px" zIndex={1}>
            <label htmlFor="profile-image">
              <Button
                as="span"
                size="small"
                bg="gray.300"
                color="secondary"
                height="auto"
                p="6px"
                borderRadius="50%"
              >
                <Icon>camera</Icon>
              </Button>
            </label>
          </Box> */}
          {/* <Hidden>
            <input
              className="hidden"
              onChange={(e) => console.log(e.target.files)}
              id="profile-image"
              accept="image/*"
              type="file"
            />
          </Hidden> */}
        </FlexBox>

        <Box mb="30px">
          <Grid container horizontal_spacing={6} vertical_spacing={4}>
            <Grid item md={12} xs={12}>
              <PanharaInput
                defaultValue={data.customerLogged?.nameDisplay}
                ref={(node) => (nameDisplayInput = node)}
                autoFocus={true}
              />
            </Grid>
          </Grid>
        </Box>
      </Card1>
      <Card1 mt="20px">
        <p>Contact Infomation</p>
        <ContactContainer>
          <ContactsForm input={contacts} setInput={setContacts} />
        </ContactContainer>
      </Card1>
      <Card1 mt="20px" mb="50px">
        <p>Delivery Address</p>
        <AddressContainer>
          <DeliveryForm input={locations} setInput={setLocation} />
        </AddressContainer>

        <Button
          mt="20px"
          type="button"
          onClick={onUpdate}
          variant="contained"
          color="primary"
        >
          Save Changes
        </Button>
      </Card1>
    </>
  );
};

ProfileEditor.layout = DashboardLayout;

export default ProfileEditor;
