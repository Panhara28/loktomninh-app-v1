import { useQuery } from "@apollo/client";
import Avatar from "@component/avatar/Avatar";
import Box from "@component/Box";
import Button from "@component/buttons/Button";
import Card from "@component/Card";
import Divider from "@component/Divider";
import FlexBox from "@component/FlexBox";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import DashboardLayout from "@component/layout/CustomerDashboardLayout";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
import TableRow from "@component/TableRow";
import Typography, { H5, H6, Paragraph } from "@component/Typography";
import useWindowSize from "@hook/useWindowSize";
import { format } from "date-fns";
import { ORDER_DETAIL } from "lib/graph";
import moment from "moment-timezone";
import React, { Fragment } from "react";

type OrderStatus = "packaging" | "shipping" | "delivering" | "complete";

const OrderDetails = ({ id }) => {
  const { data, loading } = useQuery(ORDER_DETAIL, {
    variables: {
      id: Number(id),
    },
  });
  const orderStatus: OrderStatus = "shipping";
  const orderStatusList = ["packaging", "shipping", "delivering", "complete"];
  const stepIconList = ["package-box", "truck-1", "delivery"];

  const statusIndex = orderStatusList.indexOf(orderStatus);
  const width = useWindowSize();
  const breakpoint = 350;

  if (loading || !data) return <div>Loading...</div>;

  return (
    <div>
      <DashboardPageHeader
        title="Order Details"
        iconName="bag_filled"
        button={
          <Button color="primary" bg="primary.light" px="2rem">
            Order Again
          </Button>
        }
      />

      <Card p="2rem 1.5rem" mb="30px">
        <FlexBox
          flexDirection={width < breakpoint ? "column" : "row"}
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          my="2rem"
        >
          {stepIconList.map((item, ind) => (
            <Fragment key={item}>
              <Box position="relative">
                <Avatar
                  size={64}
                  bg={ind <= statusIndex ? "primary.main" : "gray.300"}
                  color={ind <= statusIndex ? "gray.white" : "primary.main"}
                >
                  <Icon size="32px" defaultcolor="currentColor">
                    {item}
                  </Icon>
                </Avatar>
                {ind < statusIndex && (
                  <Box position="absolute" right="0" top="0">
                    <Avatar size={22} bg="gray.200" color="success.main">
                      <Icon size="12px" defaultcolor="currentColor">
                        done
                      </Icon>
                    </Avatar>
                  </Box>
                )}
              </Box>
              {ind < stepIconList.length - 1 && (
                <Box
                  flex={width < breakpoint ? "unset" : "1 1 0"}
                  height={width < breakpoint ? 50 : 4}
                  minWidth={width < breakpoint ? 4 : 50}
                  bg={ind < statusIndex ? "primary.main" : "gray.300"}
                />
              )}
            </Fragment>
          ))}
        </FlexBox>

        <FlexBox justifyContent={width < breakpoint ? "center" : "flex-end"}>
          <Typography
            p="0.5rem 1rem"
            borderRadius="300px"
            bg="primary.light"
            color="primary.main"
            textAlign="center"
          >
            Estimated Delivery Date <b>4th October</b>
          </Typography>
        </FlexBox>
      </Card>

      <Card p="0px" mb="30px" overflow="hidden">
        <TableRow bg="gray.200" p="12px" boxShadow="none" borderRadius={0}>
          <FlexBox className="pre" m="6px" alignItems="center">
            <Typography fontSize="14px" color="text.muted" mr="4px">
              Order ID:
            </Typography>
            <Typography fontSize="14px">
              {data && data.clientOrderDetail.id}
            </Typography>
          </FlexBox>
          <FlexBox className="pre" m="6px" alignItems="center">
            <Typography fontSize="14px" color="text.muted" mr="4px">
              Placed on:
            </Typography>
            <Typography fontSize="14px">
              {moment(Number(data && data.clientOrderDetail.order_date)).format(
                "Do MMM, YYYY"
              )}
            </Typography>
          </FlexBox>
          <FlexBox className="pre" m="6px" alignItems="center">
            <Typography fontSize="14px" color="text.muted" mr="4px">
              Delivered on:
            </Typography>
            <Typography fontSize="14px">
              {format(new Date(), "dd MMM, yyyy")}
            </Typography>
          </FlexBox>
        </TableRow>

        <Box py="0.5rem">
          {data &&
            data.clientOrderDetail.order_items.map((item) => (
              <FlexBox
                px="1rem"
                py="0.5rem"
                flexWrap="wrap"
                alignItems="center"
                key={item.id}
              >
                <FlexBox flex="2 2 260px" m="6px" alignItems="center">
                  <Avatar src={item.property.image_url} size={64} />
                  <Box ml="20px">
                    <H6 my="0px">{item.title}</H6>
                    <Typography fontSize="14px" color="text.muted">
                      ${item.unit_price} x {item.qty}
                    </Typography>
                  </Box>
                </FlexBox>
                <FlexBox flex="1 1 260px" m="6px" alignItems="center">
                  <Typography fontSize="14px" color="text.muted">
                    Product properties: {item.property.property}
                  </Typography>
                </FlexBox>
                <FlexBox flex="160px" m="6px" alignItems="center">
                  <Button variant="text" color="primary">
                    <Typography fontSize="14px">Write a Review</Typography>
                  </Button>
                </FlexBox>
              </FlexBox>
            ))}
        </Box>
      </Card>

      <Grid container spacing={6}>
        <Grid item lg={6} md={6} xs={12}>
          <Card p="20px 30px">
            <H5 mt="0px" mb="14px">
              Shipping Address
            </H5>
            <Paragraph fontSize="14px" my="0px">
              {data && data.clientOrderDetail.address}
            </Paragraph>
          </Card>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <Card p="20px 30px">
            <H5 mt="0px" mb="14px">
              Total Summary
            </H5>
            <FlexBox
              justifyContent="space-between"
              alignItems="center"
              mb="0.5rem"
            >
              <Typography fontSize="14px" color="text.hint">
                Subtotal:
              </Typography>
              <H6 my="0px">${data && data.clientOrderDetail.sub_total}</H6>
            </FlexBox>
            <FlexBox
              justifyContent="space-between"
              alignItems="center"
              mb="0.5rem"
            >
              <Typography fontSize="14px" color="text.hint">
                Delivery fee:
              </Typography>
              <H6 my="0px">$0.0</H6>
            </FlexBox>
            <FlexBox
              justifyContent="space-between"
              alignItems="center"
              mb="0.5rem"
            >
              <Typography fontSize="14px" color="text.hint">
                Discount:
              </Typography>
              <H6 my="0px">-$0.0</H6>
            </FlexBox>

            <Divider mb="0.5rem" />

            <FlexBox
              justifyContent="space-between"
              alignItems="center"
              mb="1rem"
            >
              <H6 my="0px">Total</H6>
              <H6 my="0px">${data && data.clientOrderDetail.total}</H6>
            </FlexBox>
            <Typography fontSize="14px">Paid by Credit/Debit Card</Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export function getServerSideProps(params) {
  const id = params.query;

  return { props: id };
}

OrderDetails.layout = DashboardLayout;

export default OrderDetails;
