import styled from "styled-components";

export const MainCardPlaceholderWrapper = styled.div`
  width: auto;
  height: auto;
  background-color: #ffff;
  padding: 40px 20px;
  border-radius: 15px;
  border: 1px solid rgba(130, 130, 130, 0.1);
  position: relative;
`;

export const PhItem = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 15px;

  animation: phItem 1s linear infinite;

  @keyframes phItem {
    0% {
      background-color: rgba(255, 255, 255, 0.3);
      left: 0px;
      top: 0px;
    }
    100% {
      background-color: rgba(255, 255, 255, 1);
      left: 0px;
      top: 0px;
    }
  }
`;

export const MainCardPlaceholderImage = styled.div`
  div {
    img {
      visibility: hidden;
      width: 100%;
      height: 100%;
      padding: 0px;
      margin: 0px;
    }
    background-color: #d7dbdd;
  }
`;

export const MainCardPlaceholderText = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
  width: 100%;
  height: 20px;
  background-color: #d7dbdd;
`;

export const MainCardLowerPlaceholderWrapper = styled.div`
  display: flex;
  height: auto;
  padding: 5px 0px;

  justify-content: space-between;
  align-items: center;
`;

export const MainCardPlaceholderPrice = styled.div`
  width: 100%;
  height: 35px;
  margin-right: 10px;
  background-color: #d7dbdd;
`;

export const MainCardPlaceholderAddBtn = styled.div`
  width: 35px;
  height: 35px;
  background-color: #d7dbdd;
`;
