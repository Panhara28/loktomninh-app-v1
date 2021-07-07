import AppLayout from "@component/layout/AppLayout";
import PageContent from "@component/PageContent";
import { SEO } from "@component/Seo";
import { ThankPage } from "@component/thanks/ThankPage";
import React from "react";

const Thanks = () => {
  return (
    <>
      <SEO />
      <PageContent>
        <main className="thank-container">
          <ThankPage />
        </main>
      </PageContent>
    </>
  );
};

Thanks.layout = AppLayout;

export default Thanks;
