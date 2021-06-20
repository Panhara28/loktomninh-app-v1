import { useQuery } from "@apollo/client";
import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import Header from "@component/header/Header";
import Icon from "@component/icon/Icon";
import MobileCategoryImageBox from "@component/mobile-category-nav/MobileCategoryImageBox";
import { MobileCategoryNavStyle } from "@component/mobile-category-nav/MobileCategoryNavStyle";
import MobileNavigationBar from "@component/mobile-navigation/MobileNavigationBar";
import Typography from "@component/Typography";
import { GET_CATEGORY_LIST } from "lib/graph";
import Link from "next/link";
import React from "react";

const Category = ({ slug }) => {
  const { data, loading } = useQuery(GET_CATEGORY_LIST, {
    variables: {
      limit: 10,
      offset: 1,
      slug,
    },
  });

  if (loading || !data) return <div>Loading...</div>;

  return (
    <MobileCategoryNavStyle>
      <Header className="header" />
      <div className="main-category-holder">
        {data &&
          data?.clientCategoryList?.map((item) => {
            return (
              <Link href={`/category/detail/${item.slug}`}>
                <a>
                  <Box className="main-category-box" key={item?.category_name}>
                    <Icon size="28px" mb="0.5rem">
                      {item?.image[0].preview}
                    </Icon>
                    <Typography
                      className="ellipsis"
                      textAlign="center"
                      fontSize="11px"
                      lineHeight="1"
                    >
                      {item?.category_name}
                    </Typography>
                  </Box>
                </a>
              </Link>
            );
          })}
      </div>
      <Box className="container">
        <Typography fontWeight="600" fontSize="15px" mb="1rem">
          Recommended Categories
        </Typography>
        <Box mb="2rem" style={{ width: "75%" }}>
          <Grid container spacing={3}>
            {data &&
              data?.clientCategoryDetail?.product.map((item, ind) => {
                return (
                  <Grid item lg={1} md={2} sm={3} xs={4} key={ind}>
                    <Link href="/product/search/423423">
                      <a>
                        <MobileCategoryImageBox {...item} />
                      </a>
                    </Link>
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Box>
      <MobileNavigationBar />
    </MobileCategoryNavStyle>
  );
};

export function getServerSideProps(params) {
  const slug = params.query;

  return { props: slug };
}

export default Category;
