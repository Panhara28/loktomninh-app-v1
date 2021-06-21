import Link from "next/link";
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
      <Link href="/">
        <a>
          <img src="/assets/images/logo/brand.png" />
        </a>
      </Link>
      <Login />
    </FlexBox>
  );
};

export default LoginPage;
