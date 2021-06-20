import AppLayout from "@component/layout/AppLayout";
import { ThankPage } from "@component/thanks/ThankPage";

const Thanks = () => {
  return (
    <main className="thank-container">
      <ThankPage />
    </main>
  );
};

Thanks.layout = AppLayout;

export default Thanks;
