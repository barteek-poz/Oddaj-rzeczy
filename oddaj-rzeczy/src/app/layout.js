import { Merriweather, Open_Sans } from "next/font/google";

const merriweather = Merriweather({ subsets: ["latin"], weight: "400" });
const openSans = Open_Sans({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Oddaj rzeczy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={merriweather.className}>{children}</body>
    </html>
  );
}
