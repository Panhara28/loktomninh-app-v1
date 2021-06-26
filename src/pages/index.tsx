import Section1 from "../components/home-1/Section1";
import Section2 from "../components/home-1/Section2";
import Section11 from "../components/home-1/Section11";
import AppLayout from "../components/layout/AppLayout";
import { SEO } from "@component/Seo";

const IndexPage = () => {
  return (
    <main>
      <SEO />
      <Section1 />
      <Section2 />
      <Section11 />
    </main>
  );
};

IndexPage.layout = AppLayout;

export default IndexPage;
