import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ediney Andrade | SAP Cloud Integration Consultant",
  description:
    "Portfólio profissional de Ediney Andrade, especialista em SAP Integration Suite, SAP CPI, APIs e integrações empresariais.",
  keywords: [
    "Ediney Andrade",
    "SAP CPI",
    "SAP Cloud Integration",
    "SAP Integration Suite",
    "Consultor SAP",
  ],
  authors: [{ name: "Ediney Andrade" }],
  openGraph: {
    title: "Ediney Andrade | SAP Cloud Integration Consultant",
    description: "Integrações SAP seguras, escaláveis e fáceis de operar.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
