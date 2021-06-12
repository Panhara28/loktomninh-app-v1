import React from "react";
import {
  MainCardLowerPlaceholderWrapper,
  MainCardPlaceholderAddBtn,
  MainCardPlaceholderImage,
  MainCardPlaceholderPrice,
  MainCardPlaceholderText,
  MainCardPlaceholderWrapper,
  PhItem,
} from "./MainCardPlaceholder.style";

const MainCardPlaceholder = () => {
  return (
    <MainCardPlaceholderWrapper>
      <PhItem></PhItem>

      <MainCardPlaceholderImage>
        <div>
          <img src="/imagePlaceholder.png"></img>
        </div>
      </MainCardPlaceholderImage>

      <MainCardPlaceholderText></MainCardPlaceholderText>

      <MainCardLowerPlaceholderWrapper>
        <MainCardPlaceholderPrice></MainCardPlaceholderPrice>

        <MainCardPlaceholderAddBtn></MainCardPlaceholderAddBtn>
      </MainCardLowerPlaceholderWrapper>
    </MainCardPlaceholderWrapper>
  );
};

export default MainCardPlaceholder;
