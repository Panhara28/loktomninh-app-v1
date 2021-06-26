// import { useQuery } from "@apollo/client";
// import Box from "@component/Box";
// import Grid from "@component/grid/Grid";
// import Header from "@component/header/Header";
// import Icon from "@component/icon/Icon";
// import MobileCategoryImageBox from "@component/mobile-category-nav/MobileCategoryImageBox";
// import { MobileCategoryNavStyle } from "@component/mobile-category-nav/MobileCategoryNavStyle";
// import MobileNavigationBar from "@component/mobile-navigation/MobileNavigationBar";
// import Typography from "@component/Typography";
// import { GET_CATEGORY_LIST } from "lib/graph";
// import Link from "next/link";
// import React from "react";

// const Category = ({ slug }) => {
//   const { data, loading } = useQuery(GET_CATEGORY_LIST, {
//     variables: {
//       limit: 10,
//       offset: 1,
//       slug,
//     },
//   });

//   if (loading || !data) return <div>Loading...</div>;

//   return (
//     <MobileCategoryNavStyle>
//       <Header className="header" />
//       <div className="main-category-holder">
//         {data &&
//           data?.clientCategoryList?.map((item) => {
//             return (
//               <Link href={`/category/detail/${item.slug}`}>
//                 <a>
//                   <Box className="main-category-box" key={item?.category_name}>
//                     <Icon size="28px" mb="0.5rem">
//                       {item?.image[0]?.preview}
//                     </Icon>
//                     <Typography
//                       className="ellipsis"
//                       textAlign="center"
//                       fontSize="11px"
//                       lineHeight="1"
//                     >
//                       {item?.category_name}
//                     </Typography>
//                   </Box>
//                 </a>
//               </Link>
//             );
//           })}
//       </div>
//       <Box className="container">
//         <Typography fontWeight="600" fontSize="15px" mb="1rem">
//           Recommended Categories
//         </Typography>
//         <Box mb="2rem" style={{ width: "75%" }}>
//           <Grid container spacing={3}>
//             {data &&
//               data?.clientCategoryDetail?.product.map((item, ind) => {
//                 return (
//                   <Grid item lg={1} md={2} sm={3} xs={4} key={ind}>
//                     <Link href="/product/search/423423">
//                       <a>
//                         <MobileCategoryImageBox {...item} />
//                       </a>
//                     </Link>
//                   </Grid>
//                 );
//               })}
//           </Grid>
//         </Box>
//       </Box>
//       <MobileNavigationBar />
//     </MobileCategoryNavStyle>
//   );
// };

// export function getServerSideProps(params) {
//   const slug = params.query;

//   return { props: slug };
// }

// export default Category;

import { useQuery } from "@apollo/client";
import Accordion from "@component/accordion/Accordion";
import AccordionHeader from "@component/accordion/AccordionHeader";
import Box from "@component/Box";
import Divider from "@component/Divider";
import Grid from "@component/grid/Grid";
import Header from "@component/header/Header";
import Icon from "@component/icon/Icon";
import { MobileCategoryNavStyle } from "@component/mobile-category-nav/MobileCategoryNavStyle";
import MobileNavigationBar from "@component/mobile-navigation/MobileNavigationBar";
import Typography from "@component/Typography";
import { buildTree } from "functions/getTree";
import { GET_CATEGORY_LIST } from "lib/graph";
import React, { Fragment, useState } from "react";

const MobileCategoryNav = () => {
  const [category, setCategory] = useState(null);
  const [subCategoryList, setSubCategoryList] = useState([]);

  const handleCategoryClick = (cat) => () => {
    console.log(":CCCC", cat);

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
        <Typography fontWeight="600" fontSize="15px" mb="1rem">
          Recommended Categories
        </Typography>
        <Box mb="2rem">
          <Grid container spacing={3}>
            {/* {suggestedList.map((item, ind) => (
              <Grid item lg={1} md={2} sm={3} xs={4} key={ind}>
                <Link href="/product/search/423423">
                  <a>
                    <MobileCategoryImageBox {...item} />
                  </a>
                </Link>
              </Grid>
            ))} */}
          </Grid>
        </Box>
        {subCategoryList.map((item, ind) => {
          return (
            <Fragment key={ind}>
              <Divider />
              <Accordion>
                <AccordionHeader px="0px" py="10px">
                  <Typography fontWeight="600" fontSize="15px">
                    {item.name}
                  </Typography>
                </AccordionHeader>
                {/* <Box mb="2rem" mt="0.5rem">
                  <Grid container spacing={3}>
                    {item.subCategories?.map((item, ind) => (
                      <Grid item lg={1} md={2} sm={3} xs={4} key={ind}>
                        <Link href="/product/search/423423">
                          <a>
                            <MobileCategoryImageBox {...item} />
                          </a>
                        </Link>
                      </Grid>
                    ))}
                  </Grid>
                </Box> */}
              </Accordion>
            </Fragment>
          );
        })}
        {/* subCategoryList.map((item, ind) => {
            console.log(item);
            return (
              <Fragment key={ind}>
                <Divider />
                <Accordion>
                  <AccordionHeader px="0px" py="10px">
                    <Typography fontWeight="600" fontSize="15px">
                      {item.name}
                    </Typography>
                  </AccordionHeader>
                  <Box mb="2rem" mt="0.5rem">
                    <Grid container spacing={3}>
                      {item.subCategories?.map((item, ind) => (
                        <Grid item lg={1} md={2} sm={3} xs={4} key={ind}>
                          <Link href="/product/search/423423">
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
          } */}
      </Box>
      <MobileNavigationBar />
    </MobileCategoryNavStyle>
  );
};

export default MobileCategoryNav;
