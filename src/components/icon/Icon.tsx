import React, { ButtonHTMLAttributes } from "react";
import { SpaceProps } from "styled-system";
import { colorOptions } from "../../interfaces";
import StyledIcon from "./IconStyle";

export interface IconProps {
  size?: string;
  children: string;
  transform?: string;
  variant?: "small" | "medium" | "large";
  color?: colorOptions;
  defaultcolor?: "currentColor" | "auto";
}

const Icon: React.FC<IconProps & SpaceProps & ButtonHTMLAttributes<IconProps>> =
  ({ children, ...props }: IconProps) => {
    console.log(children);

    return (
      <StyledIcon
        src={`/assets/images/icons/${children}.svg`}
        fallback={() => (
          <span>
            <img src={children?.trim()} width="25" />
          </span>
        )}
        {...props}
      />
    );
  };

Icon.defaultProps = {
  variant: "medium",
  defaultcolor: "currentColor",
};

export default Icon;
