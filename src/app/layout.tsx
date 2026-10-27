import type { Metadata } from "next";
import "./globals.css";
import ScrollUpCta from "@/components/ScrollUpCta";

export const metadata: Metadata = {
  title: {
    default: "AI InfraNext | Malaysia 2027",
    template: "%s | AI InfraNext | Malaysia 2027",
  },
  description:
    "The executive summit connecting enterprise AI workload demand with the compute, cloud, data centre, power, connectivity, security and capital required for production AI. 20–21 July 2027, Kuala Lumpur, Malaysia.",
  openGraph: {
    title: "AI InfraNext | Malaysia 2027",
    description:
      "Where AI infrastructure meets enterprise demand. 20–21 July 2027 · Kuala Lumpur, Malaysia. Organised by Trescon.",
    url: "https://aiinfranext.com/malaysia",
    siteName: "AI InfraNext",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <ScrollUpCta />
      </body>
    </html>
  );
}
