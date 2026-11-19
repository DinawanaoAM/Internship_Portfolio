import "./globals.css";

export const metadata = {
  title: "Angelie Marie B. Dinawanao | Portfolio",
  description: "IT student portfolio — technical documentation, software quality assurance, and project coordination.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
