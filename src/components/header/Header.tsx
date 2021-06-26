import IconButton from "@component/buttons/IconButton";
import Image from "@component/Image";
import Link from "next/link";
import React, { useState } from "react";
import Categories from "../categories/Categories";
import Container from "../Container";
import FlexBox from "../FlexBox";
import Icon from "../icon/Icon";
import MiniCart from "../mini-cart/MiniCart";
import SearchBox from "../search-box/SearchBox";
import Sidenav from "../sidenav/Sidenav";
import { Tiny } from "../Typography";
import StyledHeader from "./HeaderStyle";
import { useCart } from "react-use-cart";

type HeaderProps = {
  isFixed?: boolean;
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ isFixed, className }) => {
  const { totalUniqueItems, items } = useCart();
  const [open, setOpen] = useState(false);
  const toggleSidenav = () => setOpen(!open);

  const cartHandle = (
    <FlexBox ml="20px" alignItems="flex-start">
      <IconButton bg="gray.200" p="12px">
        <Icon size="20px">bag</Icon>
      </IconButton>

      {!!items.length && (
        <FlexBox
          borderRadius="300px"
          bg="error.main"
          px="5px"
          py="2px"
          alignItems="center"
          justifyContent="center"
          ml="-1rem"
          mt="-9px"
        >
          <Tiny color="white" fontWeight="600">
            {totalUniqueItems}
          </Tiny>
        </FlexBox>
      )}
    </FlexBox>
  );

  return (
    <StyledHeader className={className}>
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        height="100%"
      >
        <FlexBox className="logo" alignItems="center" mr="1rem">
          <Link href="/">
            <a>
              <Image src="/assets/images/logo/brand.png" alt="logo" />
            </a>
          </Link>

          {isFixed && (
            <div className="category-holder">
              <Categories>
                <FlexBox color="text.hint" alignItems="center" ml="1rem">
                  <Icon>categories</Icon>
                  <Icon>arrow-down-filled</Icon>
                </FlexBox>
              </Categories>
            </div>
          )}
        </FlexBox>

        <FlexBox justifyContent="center" flex="1 1 0">
          <SearchBox />
        </FlexBox>

        <FlexBox className="header-right" alignItems="center">
          <Link href="/">
            <a className="nav-link-home">
              <IconButton bg="gray.200" p="12px">
                <Icon size="20px">home</Icon>
              </IconButton>
            </a>
          </Link>

          <Sidenav
            handle={cartHandle}
            position="right"
            open={open}
            width={380}
            toggleSidenav={toggleSidenav}
          >
            <MiniCart toggleSidenav={toggleSidenav} />
          </Sidenav>

        </FlexBox>
      </Container>
    </StyledHeader>
  );
};

export default Header;
