import LazyImage from "@component/LazyImage";
import Typography from "@component/Typography";
import React from "react";
import FlexBox from "../FlexBox";

export interface MobileCategoryImageBoxProps {
  category_name: string;
  image?: any[];
  product_name?: string;
}

const MobileCategoryImageBox: React.FC<MobileCategoryImageBoxProps> = ({
  category_name,
  image,
  product_name,
}) => {
  const imgUrl =
    image?.length != 0 && image != undefined
      ? image[0]?.preview
      : "https://www.lehelmatyus.com/wp-content/uploads/woocommerce-placeholder-800x800.png";

  return (
    <FlexBox
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mb="10px"
    >
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
        lineHeight="1.4"
        mt="0.5rem"
      >
        {category_name || product_name}
      </Typography>
    </FlexBox>
  );
};

export default MobileCategoryImageBox;
