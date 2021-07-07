import CustomerDashboardLayout from "@component/layout/CustomerDashboardLayout";
import CustomerOrderList from "@component/orders/CustomerOrderList";
import PageContent from "@component/PageContent";
import { SEO } from "@component/Seo";
import React from "react";

const Orders = () => {
  return (
    <>
      <SEO />
      <PageContent>
        <CustomerOrderList />
      </PageContent>
    </>
  );
};

Orders.layout = CustomerDashboardLayout;

export default Orders;
