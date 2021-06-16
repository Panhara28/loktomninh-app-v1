import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import { getPhoneNumber } from "functions/getNumber";
import { CUSTOMER_CREATE } from "lib/graph";
import Link from "next/link";
import React, { useState } from "react";
import * as yup from "yup";
import Button from "../buttons/Button";
import IconButton from "../buttons/IconButton";
import FlexBox from "../FlexBox";
import Icon from "../icon/Icon";
import TextField from "../text-field/TextField";
import { H3, H5, H6, SemiSpan } from "../Typography";
import { StyledSessionCard } from "./SessionStyle";
import { VerifyScreen } from "./VerifyScreen";

const Signup: React.FC = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [userCreate] = useMutation(CUSTOMER_CREATE);
  const [isVerify, setIsVerify] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility((visible) => !visible);
  };

  const handleFormSubmit = async (e) => {
    await userCreate({
      variables: {
        input: {
          phoneNumber: getPhoneNumber(e.phone_number),
          password: e.password,
        },
      },
    });

    // Do something
    setIsVerify(true);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      onSubmit: handleFormSubmit,
      initialValues,
      validationSchema: formSchema,
    });

  if (isVerify) {
    return (
      <VerifyScreen
        phone_number={getPhoneNumber(values.phone_number)}
        password={values.password}
      />
    );
  }

  return (
    <StyledSessionCard mx="auto" my="2rem" boxShadow="large">
      <form className="content" onSubmit={handleSubmit}>
        <H3 textAlign="center" mb="0.5rem">
          Create Your Account
        </H3>
        <H5
          fontWeight="600"
          fontSize="12px"
          color="gray.800"
          textAlign="center"
          mb="2.25rem"
        >
          Please fill all forms to continued
        </H5>

        <TextField
          mb="0.75rem"
          name="phone_number"
          label="Your Phone Number"
          placeholder="Example: 095168168"
          fullwidth
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.phone_number || ""}
          errorText={touched.phone_number && errors.phone_number}
          type="text"
        />

        <TextField
          mb="0.75rem"
          name="password"
          placeholder="*********"
          type={passwordVisibility ? "text" : "password"}
          label="Password"
          fullwidth
          endAdornment={
            <IconButton
              size="small"
              type="button"
              p="0.25rem"
              mr="0.25rem"
              color={passwordVisibility ? "gray.700" : "gray.600"}
              onClick={togglePasswordVisibility}
            >
              <Icon variant="small" defaultcolor="currentColor">
                {passwordVisibility ? "eye-alt" : "eye"}
              </Icon>
            </IconButton>
          }
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password || ""}
          errorText={touched.password && errors.password}
        />

        <Button
          mb="1.65rem"
          variant="contained"
          color="primary"
          type="submit"
          fullwidth
        >
          Create Account
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
  phone_number: "",
  password: "",
};

const formSchema = yup.object().shape({
  phone_number: yup.string().required("${path} is required"),
  password: yup.string().required("${path} is required"),
});

export default Signup;
