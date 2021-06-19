import Box from "@component/Box";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import FlexBox from "../FlexBox";
import Icon from "../icon/Icon";
import Typography from "../Typography";
import {
  DashboardNavigationWrapper,
  StyledDashboardNav,
} from "./DashboardStyle";

type Props = {
  order_count?: string;
};

const CustomerDashboardNavigation = (props: Props) => {
  const { pathname } = useRouter();
  console.log("order_count", props.order_count);

  return (
    <DashboardNavigationWrapper px="0px" pb="1.5rem" color="gray.900">
      {linkList.map((item) => (
        <Fragment key={item.title}>
          <Typography p="26px 30px 1rem" color="text.muted" fontSize="12px">
            {item.title}
          </Typography>
          {item.list.map((item) => (
            <StyledDashboardNav
              isCurrentPath={pathname.includes(item.href)}
              href={item.href}
              key={item.title}
              px="1.5rem"
              mb="1.25rem"
            >
              <FlexBox alignItems="center">
                <Box className="dashboard-nav-icon-holder">
                  <Icon variant="small" defaultcolor="currentColor" mr="10px">
                    {item.iconName}
                  </Icon>
                </Box>
                <span>{item.title}</span>
              </FlexBox>
              <span>{props.order_count}</span>
            </StyledDashboardNav>
          ))}
        </Fragment>
      ))}
    </DashboardNavigationWrapper>
  );
};

const linkList = [
  {
    title: "DASHBOARD",
    list: [
      {
        href: "/orders",
        title: "Orders",
        iconName: "bag",
      },
    ],
  },
  {
    title: "ACCOUNT SETTINGS",
    list: [
      {
        href: "/profile/edit",
        title: "Profile Info",
        iconName: "user",
        count: 3,
      },
    ],
  },
];

export default CustomerDashboardNavigation;
