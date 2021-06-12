import styled from "styled-components";

// Profile Page Content

export const ProfilePageContainer = styled.div`
  width: auto;
  min-height: calc(100vh - 100px);
  background-color: #ffff;
  padding: 160px 70px 40px 70px;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1280px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

// Left Content

export const LeftContent = styled.div`
  height: 100%;
  width: 300px;
  margin-right: 30px;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

// Right Content

export const RightContent = styled.div`
  min-height: 600px;
  width: 100%;
  border: 1px solid rgba(20, 20, 20, 0.1);
  padding: 60px 50px 20px 50px;

  @media screen and (max-width: 1200px) {
    padding: 0px 15px 20px 15px;
    border: none;
  }
`;

export const ProfileTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 25px;
`;

export const ProfileLabel = styled.label`
  margin-bottom: 15px;
`;

export const ProfileInput = styled.input`
  margin: 1px;
  padding: 0px 18px;
  height: 45px;
  border: 1px solid rgb(241, 241, 241);
  border-radius: 6px;
  width: calc(100% - 36px);
  outline-color: transparent;
  background-color: rgb(247, 247, 247);

  &:focus {
    border-color: rgb(0, 158, 127);
  }

  &:focus-visible {
    outline-color: rgb(0, 158, 127);
    transition: all 0.5s ease;
  }

  @media screen and (max-width: 1200px) {
    width: calc(100% - 54px);
  }

  @media screen and (max-width: 768px) {
    width: calc(100% - 40px);
  }
`;

export const NameEmailContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 612px) {
    padding-right: 15px;
  }
`;

export const NameForm = styled.form`
  flex: 2 0 0;

  @media screen and (max-width: 768px) {
    flex: none;
    width: 100%;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 8px 0px 0px;

  @media screen and (max-width: 1200px) {
    padding: 0px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0px;
  }
`;

export const EmailForm = styled.form`
  flex: 2 0 0;

  @media screen and (max-width: 768px) {
    flex: none;
    width: 100%;
  }
`;

export const EmailContainer = styled(NameContainer)`
  padding: 0px 0px 0px 8px;

  @media screen and (max-width: 1200px) {
    padding: 0px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0px;
  }
`;

export const NameEmailSaveBtnContainer = styled.div`
  padding: 35px 30px 0px 30px;
  flex: 0.8 0 0;

  @media screen and (max-width: 1200px) {
    padding: 35px 0px 0px 0px;
  }

  @media screen and (max-width: 768px) {
    flex: none;
    width: 100%;
  }
`;

export const NameEmailSaveBtn = styled.div`
  padding: 0px 30px;
  height: 48px;
  border-radius: 6px;
  color: #ffff;
  background-color: rgb(0, 158, 127);
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;

  &: hover {
    cursor: pointer;
  }
`;

// Contact Number

export const ContactNumberContainer = styled.div`
  margin-top: 50px;

  height: auto;
  width: auto;
  @media screen and (max-width: 612px) {
    padding-right: 15px;
  }
`;

export const ContactContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, minmax(180px, 1fr));
  grid-auto-rows: minmax(75px, auto);
  grid-gap: 15px;
  width: 100%;
  height: auto;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(180px, 1fr));
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(180px, 1fr));
  }
`;

export const ContactNumberInput = styled.div`
  background-color: rgb(241, 241, 241);
  padding: 15px;
  position: relative;
  border-radius: 8px;

  &.active {
    background-color: #ffff;
    border: 1px solid #e94560;
  }

  :hover {
    cursor: pointer;
  }
`;

export const ContactInput = styled.input`
  width: 85%;
  position: absolute;
  top: 40px;
  left: 12px;
  border: 0;
  size: 16px;
  font-size: 18px;
  padding-top: 10px;
  background: none;
  &:focus {
    outline: none;
  }
`;

export const ContactStatus = styled.p`
  font-size: 13px;
  color: rgb(13, 17, 54);
  font-weight: 700;
  margin: 0;
`;

export const ContactNumber = styled.p`
  font-size: 15px;
  color: rgb(66, 69, 97);
  font-weight: 400;
`;

export const AddContactBtn = styled.div`
  color: rgb(0, 158, 127);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 1px dashed rgb(241, 241, 241);
  border-radius: 8px;

  :hover {
    border-color: #e94560;
    transition: 0.5s ease;
    cursor: pointer;
  }
`;

// Delivery Address
export const DeliveryAddressContainer = styled(ContactNumberContainer)``;

export const DeliveryAddressInput = styled(ContactNumberInput)``;

export const AddressContainer = styled(ContactContainer)`
  grid-auto-rows: minmax(90px, auto);
`;

export const AddressInput = styled(ContactInput)``;

export const AddressStatus = styled(ContactStatus)``;

export const Address = styled(ContactNumber)``;

export const AddAddressBtn = styled(AddContactBtn)``;

// Payment Option

export const PaymentOptionContainer = styled.div`
  margin-top: 50px;

  width: 100%;
  height: auto;
`;

export const PaymentContainer = styled.div`
  margin-top: 20px;
  width: auto;
  height: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 612px) {
    padding-right: 15px;
  }
`;

export const AddCardTitle = styled.p`
  color: rgb(0, 158, 127);
  font-size: 13px;
  font-weight: 700;
`;

export const AddCardBtn = styled.div`
  color: rgb(0, 158, 127);
  font-size: 13px;
  font-weight: 700;

  :hover {
    cursor: pointer;
  }
`;

export const PaymentCardContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: repeat(3, minmax(150px, 1fr));
  grid-auto-rows: minmax(130px, auto);
  grid-gap: 15px;
`;

export const PaymentCard = styled.div`
  background-color: rgb(228, 244, 252);
  border-radius: 8px;
  padding: 15px;

  &.active {
    border: 1px solid #e94560;
  }

  :hover {
    cursor: pointer;
  }
`;

export const PaymentCardLogo = styled.img`
  margin-bottom: 17px;
`;

export const PaymentCardTitle = styled.p`
  color: rgb(119, 121, 140);
  font-size: 10px;
  margin-bottom: 11px;
`;

export const PaymentCardNumberContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 9px;

  span {
    font-size: 13px;
  }
`;

export const PaymentCardNumber = styled.p`
  font-size: 11px;
  font-weight: 700;
`;

export const PaymentCardName = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: rgb(13, 17, 54);
`;
