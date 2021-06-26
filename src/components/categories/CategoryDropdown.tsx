import React from "react";
import CategoryMenuItem from "./category-menu-item/CategoryMenuItem";
import { StyledCategoryDropdown } from "./CategoryDropdownStyle";
import { useQuery } from "@apollo/client";
import { GET_CATEGORY_LIST } from "lib/graph";
import MegaMenu2 from "./mega-menu/MegaMenu2";
import { buildTree } from "functions/getTree";
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
      slug: "",
    },
  });

  if (loading || data === undefined) return <></>;
  const categorizes = buildTree(data && data?.clientCategoryList).root.children;
  return (
    <StyledCategoryDropdown open={open} position={position}>
      {categorizes.map((category) => {
        const dataImage = category.dataImage.filter(
          (image) => image.isPrimary === true
        )[0];
        return (
          <CategoryMenuItem
            title={category.name}
            href={`/category/${category.slug}`}
            icon={dataImage.preview}
            caret={!!category.children}
            key={category.name}
          >
            <MegaMenu2 data={category.children || {}} />
          </CategoryMenuItem>
        );
      })}
    </StyledCategoryDropdown>
  );
};

CategoryDropdown.defaultProps = {
  position: "absolute",
};

export default CategoryDropdown;

// import navigations from "@data/navigations";
// import React from "react";
// import CategoryMenuItem from "./category-menu-item/CategoryMenuItem";
// import { StyledCategoryDropdown } from "./CategoryDropdownStyle";
// import MegaMenu1 from "./mega-menu/MegaMenu1";
// import MegaMenu2 from "./mega-menu/MegaMenu2";

// export interface CategoryDropdownProps {
//   open: boolean;
//   position?: "absolute" | "relative";
// }

// const CategoryDropdown: React.FC<CategoryDropdownProps> = ({
//   open,
//   position,
// }) => {
//   const megaMenu = {
//     MegaMenu1,
//     MegaMenu2,
//   };

//   return (
//     <StyledCategoryDropdown open={open} position={position}>
//       {navigations.map((item) => {
//         let MegaMenu = megaMenu[item.menuComponent];

//         return (
//           <CategoryMenuItem
//             title={item.title}
//             href={item.href}
//             icon={item.icon}
//             caret={!!item.menuData}
//             key={item.title}
//           >
//             <MegaMenu data={item.menuData || {}} />
//           </CategoryMenuItem>
//         );
//       })}
//     </StyledCategoryDropdown>
//   );
// };

// CategoryDropdown.defaultProps = {
//   position: "absolute",
// };

// export default CategoryDropdown;
