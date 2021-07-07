import { useMutation } from "@apollo/client";
import { AuthContext } from "@context/app/Auth";
import { CUSTOMER_LOGOUT } from "lib/graph";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import Container from "../Container";
import FlexBox from "../FlexBox";
import Icon from "../icon/Icon";
import Menu from "../Menu";
import MenuItem from "../MenuItem";
import { Small } from "../Typography";
import StyledTopbar from "./Topbar.style";

const Topbar: React.FC = () => {
  const { customer } = useContext(AuthContext);
  const router = useRouter();

  const [customerLogout] = useMutation(CUSTOMER_LOGOUT, {
    onCompleted: (data: any) => {
      if (data.customerLogout) {
        localStorage.setItem("token", "");
        router.push("/");
      }
    },
  });

  const LogoutCustomeHandler = () => {
    customerLogout({
      variables: {
        token: process.browser && localStorage.getItem("token"),
      },
    });
  };

  return (
    <StyledTopbar>
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
      >
        <FlexBox className="topbar-left">
          <div className="logo" onClick={() => router.push("/")}>
            <img src="/assets/images/logo/brand.png" alt="logo" />
          </div>
          <FlexBox alignItems="center">
            <Icon size="14px">phone-call</Icon>
            <span>+88595477325</span>
          </FlexBox>
          <FlexBox alignItems="center" ml="20px">
            <Icon size="14px">mail</Icon>
            <span>loktomninh@gmail.com.com</span>
          </FlexBox>
        </FlexBox>
        <FlexBox className="topbar-right" alignItems="center">
          {/* <NavLink className="link" href="/help">
            Need Help?
          </NavLink> */}
          {customer ? (
            <Menu
              direction="right"
              handler={
                <FlexBox
                  className="dropdown-handler"
                  alignItems="center"
                  height="40px"
                >
                  {/* <Image src={currency.imgUrl} alt={currency.title} /> */}
                  <Small fontWeight="600">
                    Hello {customer.nameDisplay || "Customer"}
                  </Small>
                  <Icon size="1rem">chevron-down</Icon>
                </FlexBox>
              }
            >
              <Link href="/profile/edit">
                <MenuItem>
                  <a>
                    <Small fontWeight="600">Profile</Small>
                  </a>
                </MenuItem>
              </Link>
              <Link href="/orders">
                <MenuItem>
                  <a>
                    <Small fontWeight="600">Your orders</Small>
                  </a>
                </MenuItem>
              </Link>
              <MenuItem onClick={() => LogoutCustomeHandler()}>
                <Small fontWeight="600">Logout</Small>
              </MenuItem>
            </Menu>
          ) : (
            <FlexBox
              className="dropdown-handler"
              alignItems="center"
              height="40px"
            >
              <Link href="/login">
                <a style={{ color: "#fff" }}>
                  <Small fontWeight="600">Login</Small>
                </a>
              </Link>
              <Link href="/signup">
                <a style={{ color: "#fff" }}>
                  <Small fontWeight="600">Sign up</Small>
                </a>
              </Link>
            </FlexBox>
          )}
        </FlexBox>
      </Container>
    </StyledTopbar>

  );
};

export default Topbar;
