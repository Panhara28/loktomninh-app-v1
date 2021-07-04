import React from "react";
import Box from "../Box";
import Typography from "../Typography";

export interface ProductDescriptionProps {
  description: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
}) => {
  return (
    <Box>
      <Typography>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </Typography>
    </Box>
  );
};

export default ProductDescription;
