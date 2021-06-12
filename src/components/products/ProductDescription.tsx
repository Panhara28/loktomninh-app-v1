import React from "react";
import Box from "../Box";
import Typography, { H3 } from "../Typography";

export interface ProductDescriptionProps {
  description: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
}) => {
  return (
    <Box>
      <H3 mb="1rem">Specification:</H3>
      <Typography>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </Typography>
    </Box>
  );
};

export default ProductDescription;
