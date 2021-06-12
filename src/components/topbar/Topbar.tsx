import React, { useEffect, useState } from "react";
import Container from "../Container";
import FlexBox from "../FlexBox";
import Icon from "../icon/Icon";
import Image from "../Image";
import Menu from "../Menu";
import MenuItem from "../MenuItem";
import NavLink from "../nav-link/NavLink";
import { Small } from "../Typography";
import StyledTopbar from "./Topbar.style";

const Topbar: React.FC = () => {
  const [currency, setCurrency] = useState(currencyList[0]);
  const [language, setLanguage] = useState(languageList[0]);

  const handleCurrencyClick = (curr) => () => {
    setCurrency(curr);
  };

  const handleLanguageClick = (lang) => () => {
    setLanguage(lang);
  };

  useEffect(() => {
    // get language from browser
    // console.log(navigator.language);
  }, []);

  return (
    <StyledTopbar>
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
      >
        <FlexBox className="topbar-left">
          <div className="logo">
            <img src="/assets/images/logo.svg" alt="logo" />
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
          <Menu
            direction="right"
            handler={
              <FlexBox
                className="dropdown-handler"
                alignItems="center"
                height="40px"
              >
                {/* <Image src={currency.imgUrl} alt={currency.title} /> */}
                <Small fontWeight="600">Panhara</Small>
                <Icon size="1rem">chevron-down</Icon>
              </FlexBox>
            }
          >
            <MenuItem>
              <Small fontWeight="600">Logout</Small>
            </MenuItem>
          </Menu>
        </FlexBox>
      </Container>
    </StyledTopbar>
  );
};

const languageList = [
  {
    title: "EN",
    imgUrl: "/assets/images/flags/usa.png",
  },
  {
    title: "BN",
    imgUrl: "/assets/images/flags/bd.png",
  },
  {
    title: "HN",
    imgUrl: "/assets/images/flags/in.png",
  },
];

const currencyList = [
  {
    title: "USD",
    imgUrl: "/assets/images/flags/usa.png",
  },
  {
    title: "EUR",
    imgUrl: "/assets/images/flags/uk.png",
  },
  {
    title: "BDT",
    imgUrl: "/assets/images/flags/bd.png",
  },
  {
    title: "INR",
    imgUrl: "/assets/images/flags/in.png",
  },
];

export default Topbar;
