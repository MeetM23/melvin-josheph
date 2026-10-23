import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicy() {
  return (
    <PolicyPage
      title="Privacy Policy"
      intro="How Durawin Trafford Sheet Manufacturing handles the information you share with us."
      updated="October 2026"
      sections={[
        {
          heading: "Who we are",
          body: [
            `This website is operated by ${site.name} ${site.tagline}, ${site.address.join(", ")} (GSTIN ${site.gstin}).`,
          ],
        },
        {
          heading: "Information we collect",
          body: ["We collect only what you choose to share with us when you enquire about our products."],
          list: [
            "Your name, phone number and email address",
            "The message or requirement you send us through the contact form or by phone",
          ],
        },
        {
          heading: "How we use it",
          body: ["We use your details to respond to enquiries, prepare quotations and arrange supply and delivery."],
          list: ["We do not sell your personal information.", "We do not send marketing messages you have not asked for."],
        },
        {
          heading: "Sharing your information",
          body: [
            "We share information only where needed to fulfil your order, such as with delivery partners, or where required by law.",
          ],
        },
        {
          heading: "Third-party services",
          body: [
            "The Contact page embeds Google Maps. Google may set cookies or collect usage data when the map loads, under Google's own privacy policy.",
          ],
        },
        {
          heading: "Data retention and security",
          body: [
            "We keep enquiry details only as long as needed to serve you and meet legal and tax obligations, and take reasonable steps to protect them.",
          ],
        },
        {
          heading: "Your choices",
          body: [
            `You may ask us to correct or delete the information we hold about you by calling ${site.contact} on +91 ${site.phone} or writing to us at the address above.`,
          ],
        },
        {
          heading: "Changes to this policy",
          body: ["We may update this policy from time to time. The latest version is always shown on this page."],
        },
      ]}
    />
  );
}
