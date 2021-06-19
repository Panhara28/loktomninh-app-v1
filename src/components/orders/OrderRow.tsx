import moment from "moment-timezone";
import Link from "next/link";
import React from "react";
import Box from "../Box";
import IconButton from "../buttons/IconButton";
import { Chip } from "../Chip";
import Hidden from "../hidden/Hidden";
import Icon from "../icon/Icon";
import TableRow from "../TableRow";
import Typography, { H5, Small } from "../Typography";

export interface OrderRowProps {
  order?: {
    id: number;
    order_date: any;
    order_time: string;
    total: number;
    sub_total: number;
    status: string;
  };
}

const OrderRow: React.FC<OrderRowProps> = ({ order }) => {
  const getColor = (status) => {
    switch (status) {
      case "PENDING":
        return "secondary";
      case "IN PROGRESS":
        return "secondary";
      case "APRROVED":
        return "success";
      case "CANCELLED":
        return "error";
      default:
        return "";
    }
  };
  console.log(order.order_date);

  return (
    <Link href={`/orders/${order.id}`}>
      <TableRow
        as="a"
        href={`/orders/${order.id}`}
        my="1rem"
        padding="6px 18px"
      >
        <H5 m="6px" textAlign="left">
          {order.id}
        </H5>
        <Box m="6px">
          <Chip p="0.25rem 1rem" bg={`${getColor(order.status)}.light`}>
            <Small color={`${getColor(order.status)}.main`}>
              {order.status}
            </Small>
          </Chip>
        </Box>
        <Typography className="flex-grow pre" m="6px" textAlign="left">
          {moment(Number(order.order_date)).format("MMM Do YY")}
        </Typography>
        <Typography m="6px" textAlign="left">
          ${order.total.toFixed(2)}
        </Typography>

        <Hidden flex="0 0 0 !important" down={769}>
          <Typography textAlign="center" color="text.muted">
            <IconButton size="small">
              <Icon variant="small" defaultcolor="currentColor">
                arrow-right
              </Icon>
            </IconButton>
          </Typography>
        </Hidden>
      </TableRow>
    </Link>
  );
};

export default OrderRow;
