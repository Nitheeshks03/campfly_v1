import { Tabs, rem } from "@mantine/core";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet, useParams, Link } from "react-router-dom";
function PrivacyPolicyPage() {
  const params = useParams();
  const defaultValue = params.tab || "privacy";
  return (
    <>
      <Navbar />
      <div className="mx-[70px]">
        <Tabs defaultValue={defaultValue}>
          <Tabs.List>
            <Tabs.Tab value="privacy">
              <Link to="/privacy">Privacy policies</Link>
            </Tabs.Tab>
            <Tabs.Tab value="refund">
              <Link to="/refund">Cancellation and refund policy</Link>
            </Tabs.Tab>
            <Tabs.Tab value="terms">
              <Link to="/terms">Terms & conditions</Link>
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="privacy">
            <Outlet />
          </Tabs.Panel>

          <Tabs.Panel value="refund">
            <Outlet />
          </Tabs.Panel>

          <Tabs.Panel value="terms">
            <Outlet />
          </Tabs.Panel>
        </Tabs>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicyPage;
