import { Tabs, rem } from "@mantine/core";
import NavBar from "../components/Navbar";
import Privacy from "../components/Privacy";
import Footer from "../components/Footer";

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

          <Tabs.Panel value="refund">Messages tab content</Tabs.Panel>

          <Tabs.Panel value="terms">Settings tab content</Tabs.Panel>
        </Tabs>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicyPage;
