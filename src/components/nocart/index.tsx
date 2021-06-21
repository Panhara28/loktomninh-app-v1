import Button from "@component/buttons/Button";
import { useRouter } from "next/router";
import React from "react";
import { NoCartContainer } from "./nocart-styles";

export function NoCart() {
  const router = useRouter()
  return (
    <NoCartContainer>
      <h3>No Item</h3>
      <img src="/assets/images/icons/no-shopping-cart.svg" style={{ width: "20%" }} />
      <Button
        variant="contained"
        color="primary"
        fullwidth
        mt="20px"
        mb="20px"
        onClick={() => router.push('/')}>
        Go To Shopping
      </Button>
    </NoCartContainer>
  )
}