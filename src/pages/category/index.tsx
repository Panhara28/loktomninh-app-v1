import { useQuery } from "@apollo/client";
import Accordion from "@component/accordion/Accordion";
import AccordionHeader from "@component/accordion/AccordionHeader";
import Box from "@component/Box";
import Divider from "@component/Divider";
import Grid from "@component/grid/Grid";
import Header from "@component/header/Header";
import Icon from "@component/icon/Icon";
import MobileCategoryImageBox from "@component/mobile-category-nav/MobileCategoryImageBox";
import { MobileCategoryNavStyle } from "@component/mobile-category-nav/MobileCategoryNavStyle";
import MobileNavigationBar from "@component/mobile-navigation/MobileNavigationBar";
import PageContent from "@component/PageContent";
import { SEO } from "@component/Seo";
import Typography from "@component/Typography";
import { buildTree } from "functions/getTree";
import { GET_CATEGORY_LIST } from "lib/graph";
import Link from "next/link";
import React, { Fragment, useState } from "react";

const MobileCategoryNav = () => {
  const [category, setCategory] = useState(null);
  const [subCategoryList, setSubCategoryList] = useState([]);

  const handleCategoryClick = (cat) => () => {
    let menuData = cat;
    if (menuData) {
      setSubCategoryList(menuData || []);
    } else setSubCategoryList([]);
    setCategory(cat);
  };

  const { loading, data } = useQuery(GET_CATEGORY_LIST, {
    variables: {
      limit: 0,
      offset: 0,
      slug: "",
    },
  });

  if (loading || data === undefined) return <></>;

  const categorizes = buildTree(data && data?.clientCategoryList).root.children;

  return (
    <>

      <MobileCategoryNavStyle>
        <Header className="header" />
        <div className="main-category-holder">
          {categorizes.map((item) => {
            const dataImage = item?.dataImage.filter(
              (image) => image.isPrimary === true
            )[0];
            return (
              <Box
                className="main-category-box"
                borderLeft={`${category?.href === item.href ? "3" : "0"}px solid`}
                onClick={handleCategoryClick(item.children)}
                key={item?.name}
              >
                <Icon size="28px" mb="0.5rem">
                  {dataImage?.preview}
                </Icon>
                <Typography
                  className="ellipsis"
                  textAlign="center"
                  fontSize="11px"
                  lineHeight="1"
                >
                  {item?.name}
                </Typography>
              </Box>
            );
          })}
        </div>
        <Box className="container">
          {subCategoryList &&
            subCategoryList.map((item, ind) => {
              return (
                <Fragment key={ind}>
                  <Divider />
                  <Accordion>
                    <AccordionHeader px="0px" py="10px">
                      <Typography fontWeight="600" fontSize="15px">
                        {item.name}
                      </Typography>
                    </AccordionHeader>
                    <Box mb="2rem" mt="0.5rem" width="75%">
                      <Grid container spacing={3}>
                        {item?.product?.slice(0, 12).map((item, ind) => (
                          <Grid item lg={1} md={2} sm={3} xs={4} key={ind}>
                            <Link href={`/product/${item.slug}`}>
                              <a>
                                <MobileCategoryImageBox {...item} />
                              </a>
                            </Link>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Accordion>
                </Fragment>
              );
            })}

          <Typography fontWeight="600" fontSize="15px" mb="1rem">
            Recommended Categories
          </Typography>
          <Box mb="2rem" width="75%">
            <Grid container spacing={4}>
              {data.clientCategoryList.map((item, ind) => (
                <Grid item lg={1} md={2} sm={3} xs={3} key={ind}>
                  <Link href={`/category/${item.slug}`}>
                    <a>
                      <MobileCategoryImageBox {...item} />
                    </a>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        <MobileNavigationBar />
      </MobileCategoryNavStyle>

    </>
  );
};

const Category = () => {
  return (
    <>
      <SEO />
      <PageContent>
        <MobileCategoryNav />
      </PageContent>
    </>
  )
}

export default Category;
