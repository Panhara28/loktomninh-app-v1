import AppStore from "@component/AppStore";
import Image from "@component/Image";
import Link from "next/link";
import React from "react";
import Box from "../Box";
import Container from "../Container";
import FlexBox from "../FlexBox";
import Grid from "../grid/Grid";
import Icon from "../icon/Icon";
import Typography, { Paragraph } from "../Typography";

const Footer: React.FC = () => {
  return (
    <footer>
      <Box bg="#0F3460">
        <Container p="1rem" color="white">
          <Box py="5rem" overflow="hidden">
            <Grid container spacing={6}>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Link href="/">
                  <a>
                    <Image
                      mb="1.25rem"
                      src="/assets/images/logo/brand.png"
                      alt="logo"
                    />
                  </a>
                </Link>

                <Paragraph mb="1.25rem" color="gray.500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor libero id et, in gravida. Sit diam duis mauris nulla
                  cursus. Erat et lectus vel ut sollicitudin elit at amet.
                </Paragraph>

                <AppStore />
              </Grid>

              {/* <Grid item lg={2} md={6} sm={6} xs={12}>
                <Typography
                  fontSize="25px"
                  fontWeight="600"
                  mb="1.25rem"
                  lineHeight="1"
                >
                  About Us
                </Typography>

                <div>
                  {aboutLinks.map((item, ind) => (
                    <Link href="/" key={ind}>
                      <StyledLink>{item}</StyledLink>
                    </Link>
                  ))}
                </div>
              </Grid> */}

              {/* <Grid item lg={3} md={6} sm={6} xs={12}>
                <Typography
                  fontSize="25px"
                  fontWeight="600"
                  mb="1.25rem"
                  lineHeight="1"
                >
                  Customer Care
                </Typography>

                <div>
                  {customerCareLinks.map((item, ind) => (
                    <Link href="/" key={ind}>
                      <StyledLink>{item}</StyledLink>
                    </Link>
                  ))}
                </div>
              </Grid> */}

              <Grid item lg={3} md={6} sm={6} xs={12}>
                <Typography
                  fontSize="25px"
                  fontWeight="600"
                  mb="1.25rem"
                  lineHeight="1"
                >
                  Contact Us
                </Typography>
                <Typography py="0.3rem" color="gray.500">
                  57ceo Street 204 Sangkat Tik Laork 3 Kanh Tol Kork, Pnhom Penh
                </Typography>
                <Typography py="0.3rem" color="gray.500">
                  Email: loktomninh@gmail.com
                </Typography>
                <Typography py="0.3rem" mb="1rem" color="gray.500">
                  Phone: +85595477325
                </Typography>

                <FlexBox className="flex" mx="-5px">
                  {iconList.map((item) => (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer noopenner"
                      key={item.iconName}
                    >
                      <Box
                        m="5px"
                        size="small"
                        p="10px"
                        bg="rgba(0,0,0,0.2)"
                        borderRadius="50%"
                      >
                        <Icon size="12px" defaultcolor="auto">
                          {item.iconName}
                        </Icon>
                      </Box>
                    </a>
                  ))}
                </FlexBox>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

const iconList = [
  { iconName: "facebook", url: "https://www.facebook.com/UILibOfficial" },
  { iconName: "twitter", url: "/" },
  {
    iconName: "youtube",
    url: "https://www.youtube.com/channel/UCsIyD-TSO1wQFz-n2Y4i3Rg",
  },
  { iconName: "google", url: "/" },
  { iconName: "instagram", url: "/" },
];

export default Footer;
