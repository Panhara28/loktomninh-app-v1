import { SEO } from "@component/Seo";
import Link from "next/link";
import React from "react";
import FlexBox from "../components/FlexBox";
import Signup from "../components/sessions/Signup";

const SignUpPage = () => {
  return (
    <>
      <SEO />
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
        <Signup />
      </FlexBox>
    </>
  );
};

export default SignUpPage;
