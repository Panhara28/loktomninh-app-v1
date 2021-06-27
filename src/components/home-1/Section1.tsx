import { useQuery } from "@apollo/client";
import Box from "@component/Box";
import CarouselCard1 from "@component/carousel-cards/CarouselCard1";
import Carousel from "@component/carousel/Carousel";
import Container from "@component/Container";
import Navbar from "@component/navbar/Navbar";
import { BANNERS } from "lib/graph";
import React, { Fragment } from "react";

const Section1: React.FC = () => {
  const { data, loading } = useQuery(BANNERS, {
    variables: {
      limit: 5,
      offset: 1,
    },
  });

  if (loading || !data) return <></>;

  return (
    <Fragment>
      <Navbar navListOpen={true} />
      <Box bg="gray.white" mb="3.75rem">
        <Container pb="2rem">
          <Carousel
            totalSlides={data && data?.clientBannerList?.length}
            visibleSlides={1}
            infinite={true}
            autoPlay={true}
            showDots={true}
            showArrow={false}
            spacing="0px"
          >
            {data.clientBannerList.map((banner) => {
              const primaryImage = banner?.image?.filter(
                (image) => image.isPrimary === true
              )[0];
              return (
                <CarouselCard1
                  title={banner?.title}
                  subtitle={banner?.subtitle}
                  image={primaryImage?.preview}
                />
              );
            })}
          </Carousel>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Section1;
