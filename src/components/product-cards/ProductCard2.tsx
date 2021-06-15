import HoverBox from "@component/HoverBox";
import LazyImage from "@component/LazyImage";
import { H4 } from "@component/Typography";
import Link from "next/link";
import React from "react";

export interface ProductCard2Props {
  product_name: string;
  properties: any[];
  slug: string;
  image: any[];
}

const ProductCard2: React.FC<ProductCard2Props> = ({
  product_name,
  image,
  slug,
}) => {
  const primaryImage = image?.filter((image) => image.isPrimary === true)[0];
  return (
    <Link href={`/product/${slug}`}>
      <a>
        <HoverBox borderRadius={8} mb="0.5rem">
          <LazyImage
            src={primaryImage ? primaryImage.preview : ""}
            width="100%"
            height="auto"
            layout="responsive"
            alt={product_name}
            priority={true}
            unoptimized={true}
          />
        </HoverBox>
        <H4 fontWeight="600" fontSize="14px" mb="0.25rem">
          {product_name}
        </H4>
        <H4 fontWeight="600" fontSize="14px" color="primary.main">
          ${Math.ceil(10).toLocaleString()}
        </H4>
      </a>
    </Link>
  );
};

export default ProductCard2;
