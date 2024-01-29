import { Tabs, rem } from "@mantine/core";
import NavBar from "../components/Navbar";
import Privacy from "../components/Privacy";
import Footer from "../components/Footer";
import Refund from "../components/Refund";
import Terms from "../components/Terms";

function PrivacyPolicyPage() {
  return (
    <>
      <NavBar />
      <div className="mx-[70px]">
        <Tabs defaultValue="privacy">
          <Tabs.List>
            <Tabs.Tab value="privacy">Privacy policies</Tabs.Tab>
            <Tabs.Tab value="refund">Cancellation and refund policy</Tabs.Tab>
            <Tabs.Tab value="terms">Terms & conditions</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="privacy">
            <Privacy />
          </Tabs.Panel>

          <Tabs.Panel value="refund">
            <Refund />
          </Tabs.Panel>

          <Tabs.Panel value="terms">
            <Terms />
          </Tabs.Panel>
        </Tabs>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicyPage;
