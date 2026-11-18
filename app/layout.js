import "./globals.css";

export const metadata = {
  title: "Angelie Marie B. Dinawanao | Portfolio",
  description: "IT Student — Software Quality, Technical Communication, and Project Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
