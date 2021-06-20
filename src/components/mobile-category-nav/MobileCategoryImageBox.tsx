import LazyImage from "@component/LazyImage";
import Typography from "@component/Typography";
import React from "react";
import FlexBox from "../FlexBox";

export interface MobileCategoryImageBoxProps {
  product_name: string;
  image?: any[];
}

const MobileCategoryImageBox: React.FC<MobileCategoryImageBoxProps> = ({
  product_name,
  image,
}) => {
  console.log(product_name, image);
  const imgUrl = image[0]?.preview;
  return (
    <FlexBox flexDirection="column" alignItems="center" justifyContent="center">
      <LazyImage
        src={imgUrl}
        borderRadius="5px"
        width="100%"
        height="100%"
        objectFit="cover"
        priority={true}
        unoptimized={true}
      />

      <Typography
        className="ellipsis"
        textAlign="center"
        fontSize="11px"
        lineHeight="1"
        mt="0.5rem"
      >
        {product_name}
      </Typography>
    </FlexBox>
  );
};

export default MobileCategoryImageBox;
