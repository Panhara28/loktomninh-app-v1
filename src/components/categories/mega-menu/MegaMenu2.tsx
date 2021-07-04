import Card from "@component/Card";
import React from "react";
import CategoryMenuItem from "../category-menu-item/CategoryMenuItem";
import { StyledMegaMenu1 } from "./MegaMenuStyle";

export interface MegaMenu2Props {
  data: {
    icon: string;
    slug: string;
    name: string;
    children?: any[];
  }[];
}

const MegaMenu2: React.FC<MegaMenu2Props> = ({ data }) => {
  return (
    <StyledMegaMenu1 className="mega-menu">
      <Card ml="1rem" py="0.5rem" boxShadow="regular">
        {data?.map((item: any) => {
          const dataImage = item?.dataImage?.filter(
            (image) => image?.isPrimary === true
          )[0];
          return (
            <CategoryMenuItem
              title={item?.name}
              href={`/category/${item?.slug}`}
              icon={dataImage?.preview}
              caret={!!!item?.children}
              key={item?.name}
            >
              {/* {item?.children && (
                <MegaMenu3 minWidth="560px" data={item?.children || {}} />
              )} */}
            </CategoryMenuItem>
          );
        })}
      </Card>
    </StyledMegaMenu1>
  );
};

export default MegaMenu2;
