import React from "react";
import FlexBox from "../components/FlexBox";
import Signup from "../components/sessions/Signup";

const SignUpPage = () => {
  return (
    <FlexBox
      flexDirection="column"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      className="mx-2"
    >
      <img src="/assets/images/logo/brand.png" />
      <Signup />
    </FlexBox>
  );
};

export default SignUpPage;
