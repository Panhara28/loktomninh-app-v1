import CheckoutForm2 from "@component/checkout/CheckoutForm2";
import Container from "@component/Container";
import AppLayout from "@component/layout/AppLayout";
import { ProtectedRoute } from "@context/app/Auth";
import React from "react";
import Grid from "../components/grid/Grid";

const Checkout = () => {
  return (
    <ProtectedRoute>
      <Container my="1.5rem">
        <CheckoutForm2 />
      </Container>
    </ProtectedRoute>
  );
};

Checkout.layout = AppLayout;

export default Checkout;
