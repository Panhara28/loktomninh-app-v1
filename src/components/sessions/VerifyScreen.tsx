import { useMutation } from "@apollo/client";
import { AuthContext } from "@context/app/Auth";
import { LoginContext } from "@context/app/LoginContext";
import TokenContext from "@context/app/Token";
import { useFormik } from "formik";
import { CUSTOMER_LOGIN, CUSTOMER_VERIFY } from "lib/graph";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import * as yup from "yup";
import Button from "../buttons/Button";
import FlexBox from "../FlexBox";
import TextField from "../text-field/TextField";
import { H3, H5, H6, SemiSpan } from "../Typography";
import { StyledSessionCard } from "./SessionStyle";

interface Props {
  phone_number: string;
  password: string;
}

export const VerifyScreen = ({ phone_number, password }: Props) => {
  const { setToken } = useContext(TokenContext);

  const router = useRouter();
  const { setIsLogin } = useContext(LoginContext);

  const [customerLogin] = useMutation(CUSTOMER_LOGIN, {
    onCompleted: (data: any) => {
      setToken(data.customerLogin);
      localStorage.setItem("token", data.customerLogin);
      router.push("/");
    },
  });

  const { onLogin } = useContext(AuthContext);

  const [userVerify] = useMutation(CUSTOMER_VERIFY, {
    onCompleted: (data: any) => {
      if (data.customerVerify) {
        console.log("Done");
        console.log(phone_number);
        console.log(password);

        customerLogin({
          variables: {
            data: {
              phoneNumber: "+855".concat(phone_number),
              password,
            },
          },
        });

        // Do something
        setIsLogin(false);

        onLogin();
      }
    },
  });

  const handleFormSubmit = async (values) => {
    await userVerify({
      variables: {
        input: {
          code: values.verify_code,
          phoneNumber: phone_number,
        },
      },
    });
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      onSubmit: handleFormSubmit,
      initialValues,
      validationSchema: formSchema,
    });

  return (
    <StyledSessionCard mx="auto" my="2rem" boxShadow="large">
      <form className="content" onSubmit={handleSubmit}>
        <H3 textAlign="center" mb="0.5rem">
          Verify Your Account
        </H3>
        <H5
          fontWeight="600"
          fontSize="12px"
          color="gray.800"
          textAlign="center"
          mb="2.25rem"
        >
          Please fill your verify code
        </H5>

        <TextField
          mb="0.75rem"
          name="verify_code"
          label="Verify Code"
          placeholder="1234"
          fullwidth
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.verify_code || ""}
          errorText={touched.verify_code && errors.verify_code}
          type="text"
        />

        <Button
          mb="1.65rem"
          variant="contained"
          color="primary"
          type="submit"
          fullwidth
        >
          Verify
        </Button>
      </form>
      <FlexBox justifyContent="center" bg="gray.200" py="19px">
        <SemiSpan>Already have account?</SemiSpan>
        <Link href="/login">
          <a>
            <H6 ml="0.5rem" borderBottom="1px solid" borderColor="gray.900">
              Log in
            </H6>
          </a>
        </Link>
      </FlexBox>
    </StyledSessionCard>
  );
};

const initialValues = {
  verify_code: "",
};

const formSchema = yup.object().shape({
  verify_code: yup.string().required("${path} is required"),
});
