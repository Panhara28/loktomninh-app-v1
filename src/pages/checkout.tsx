import CheckoutForm2 from "@component/checkout/CheckoutForm2";
import Container from "@component/Container";
import AppLayout from "@component/layout/AppLayout";
import { SEO } from "@component/Seo";
import { ProtectedRoute } from "@context/app/Auth";
import React from "react";

const Checkout = () => {
  return (
    <>
      <SEO />
      <ProtectedRoute>
        <Container my="1.5rem">
          <CheckoutForm2 />
        </Container>
      </ProtectedRoute>
    </>
  );
};

Checkout.layout = AppLayout;

export default Checkout;
