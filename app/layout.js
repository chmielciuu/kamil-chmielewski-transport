export const metadata = {
  title: "Kamil Chmielewski Transport",
  description: "Premium Passenger Transport in Wrocław",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
