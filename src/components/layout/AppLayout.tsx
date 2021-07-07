import Footer from "@component/footer/Footer";
import Header from "@component/header/Header";
import MobileNavigationBar from "@component/mobile-navigation/MobileNavigationBar";
import PageContent from "@component/PageContent";
import Sticky from "@component/sticky/Sticky";
import Topbar from "@component/topbar/Topbar";
import useWindowSize from "@hook/useWindowSize";
import React from "react";
import StyledAppLayout from "./AppLayoutStyle";

type Props = {
  title?: string;
  navbar?: React.ReactChild;
};

const AppLayout: React.FC<Props> = ({
  children,
  navbar,
}) => {
  const width = useWindowSize();
  const isMobile = width < 769;
  return (
    <PageContent>
      <StyledAppLayout>
        <Topbar />

        <Sticky fixedOn={0}>
          <Header />
        </Sticky>

        {navbar && <div className="section-after-sticky">{navbar}</div>}
        {!navbar ? (
          <div className="section-after-sticky">{children}</div>
        ) : (
          children
        )}

        <MobileNavigationBar />
        {isMobile ? "" : <Footer />}
      </StyledAppLayout>
    </PageContent>
  );
};

export default AppLayout;
