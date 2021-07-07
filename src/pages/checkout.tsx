import CheckoutForm2 from "@component/checkout/CheckoutForm2";
import Container from "@component/Container";
import AppLayout from "@component/layout/AppLayout";
import PageContent from "@component/PageContent";
import { SEO } from "@component/Seo";
import { ProtectedRoute } from "@context/app/Auth";
import React from "react";

const Checkout = () => {
  return (
    <>
      <SEO />
      <PageContent>
        <ProtectedRoute>
          <Container my="1.5rem">
            <CheckoutForm2 />
          </Container>
        </ProtectedRoute>
      </PageContent>
    </>
  );
};

Checkout.layout = AppLayout;

export default Checkout;
