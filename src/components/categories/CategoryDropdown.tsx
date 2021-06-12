import navigations from "@data/navigations";
import React from "react";
import CategoryMenuItem from "./category-menu-item/CategoryMenuItem";
import { StyledCategoryDropdown } from "./CategoryDropdownStyle";
import MegaMenu1 from "./mega-menu/MegaMenu1";
import MegaMenu2 from "./mega-menu/MegaMenu2";
import { useQuery } from "@apollo/client";
import { GET_CATEGORY_LIST } from "lib/graph";
export interface CategoryDropdownProps {
  open: boolean;
  position?: "absolute" | "relative";
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({
  open,
  position,
}) => {
  const { loading, data } = useQuery(GET_CATEGORY_LIST, {
    variables: {
      limit: 0,
      offset: 0,
    },
  });

  if (loading || data === undefined) return <></>;

  return (
    <StyledCategoryDropdown open={open} position={position}>
      {data &&
        data.clientCategoryList &&
        data.clientCategoryList.map((category) => {
          const { image, category_name, slug } = category;
          const dataImage = image.filter(
            (image) => image.isPrimary === true
          )[0];
          return (
            <CategoryMenuItem
              title={category_name}
              href={`/category/${slug}`}
              icon={dataImage.preview}
              key={category_name}
            ></CategoryMenuItem>
          );
        })}
    </StyledCategoryDropdown>
  );
};

CategoryDropdown.defaultProps = {
  position: "absolute",
};

export default CategoryDropdown;
