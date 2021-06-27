import React from "react";
import Button from "../buttons/Button";
import Typography from "../Typography";
import { StyledCarouselCard1 } from "./CarouselCardStyle";

export interface CarouselCard1Props {
  title: string;
  subtitle: string;
  image: string;
}

const CarouselCard1: React.FC<CarouselCard1Props> = ({
  title,
  subtitle,
  image,
}) => {
  return (
    <StyledCarouselCard1>
      <div>
        <h1 className="title">{title || "Untitle"}</h1>
        <Typography color="secondary.main" mb="1.35rem">
          {subtitle || "Untitle"}
        </Typography>
        <Button
          className="button-link"
          variant="contained"
          color="primary"
          p="1rem 1.5rem"
        >
          Visit
        </Button>
      </div>

      <div className="image-holder">
        <img src={image} alt={title || "Untitle"} />
      </div>
    </StyledCarouselCard1>
  );
};

export default CarouselCard1;
