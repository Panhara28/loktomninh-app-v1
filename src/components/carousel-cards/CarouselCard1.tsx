import { useRouter } from "next/router";
import React from "react";
import Button from "../buttons/Button";
import Typography from "../Typography";
import { StyledCarouselCard1 } from "./CarouselCardStyle";

export interface CarouselCard1Props {
  title: string;
  subtitle: string;
  image: string;
  url_button: string;
}

const CarouselCard1: React.FC<CarouselCard1Props> = ({
  title,
  subtitle,
  image,
  url_button,
}) => {
  const router = useRouter();

  return (
    <StyledCarouselCard1>
      <div>
        <h1 className="title" style={{ fontWeight: "bold", marginBottom: 8 }}>
          {title || "Untitle"}
        </h1>
        <Typography color="secondary.main" mb="1.35rem">
          {subtitle || "Untitle"}
        </Typography>
        <Button
          className="button-link"
          variant="contained"
          color="primary"
          p="1rem 1.5rem"
          onClick={() => {
            router.push(url_button);
          }}
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
