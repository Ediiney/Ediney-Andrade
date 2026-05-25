import "./globals.css";

export const metadata = {
  title: "Ediiney Portfolio",
  description: "AI Product Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
