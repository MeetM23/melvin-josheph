import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function Terms() {
  return (
    <PolicyPage
      title="Terms & Conditions"
      intro="Please read these terms before using our website or placing an enquiry."
      updated="October 2026"
      sections={[
        {
          heading: "Acceptance of terms",
          body: [
            `By using this website you agree to these terms. The website is operated by ${site.name} ${site.tagline}, Palakkad, Kerala.`,
          ],
        },
        {
          heading: "Product information",
          body: [
            "Descriptions, images and colours on this website are for general guidance. Colours may appear differently on different screens, and final specifications are confirmed at the time of quotation.",
          ],
        },
        {
          heading: "Quotations and orders",
          body: [
            "Prices, lengths, thicknesses, colours and delivery timelines are provided on request and confirmed in writing or by phone. A quotation is not a binding order until both parties agree on its terms.",
          ],
        },
        {
          heading: "Delivery and inspection",
          body: [
            "Delivery schedules are estimates. Please inspect goods on receipt and report any damage or discrepancy to us promptly.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "The Durawin name, logo, text and images on this website belong to Durawin or their respective owners and may not be copied or reused without permission. Partner logos belong to their respective companies.",
          ],
        },
        {
          heading: "Limitation of liability",
          body: [
            "We take care to keep this website accurate and available but provide it as is. To the extent permitted by law, we are not liable for losses arising from use of the website.",
          ],
        },
        {
          heading: "Governing law",
          body: ["These terms are governed by the laws of India, and disputes are subject to the courts at Palakkad, Kerala."],
        },
        {
          heading: "Contact",
          body: [`Questions about these terms? Call ${site.contact} on +91 ${site.phone} or visit us at ${site.address.join(", ")}.`],
        },
      ]}
    />
  );
}
