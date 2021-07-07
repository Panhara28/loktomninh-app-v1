import Section1 from "../components/home-1/Section1";
import Section2 from "../components/home-1/Section2";
import Section11 from "../components/home-1/Section11";
import AppLayout from "../components/layout/AppLayout";
import { SEO } from "@component/Seo";
import PageContent from "@component/PageContent";

const IndexPage = () => {
  return (
    <main>
      <SEO title="Home" />
      <AppLayout>
        <PageContent>
          <Section1 />
          <Section2 />
          <Section11 />
        </PageContent>
      </AppLayout>
    </main>
  );
};

export default IndexPage;
