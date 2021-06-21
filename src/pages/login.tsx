import React from "react";
import FlexBox from "../components/FlexBox";
import Login from "../components/sessions/Login";

const LoginPage = () => {
  return (
    <FlexBox
      flexDirection="column"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      className="mx-2"
    >
      <img src="/assets/images/logo/brand.png" />

      <Login />
    </FlexBox>
  );
};

export default LoginPage;
