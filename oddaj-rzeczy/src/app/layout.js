import MainNavigation from "@/_components/MainNavigation";
import { Merriweather, Open_Sans } from "next/font/google";
import "../_styles/global.scss";
import LoginNavigation from "@/_components/LoginNavigation";

const merriweather = Merriweather({ subsets: ["latin"], weight: "400" });
const openSans = Open_Sans({ subsets: ["latin"], weight:["300", "400"] });

export const metadata = {
  title: "Oddaj rzeczy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <div style={{position: 'absolute', right:0, zIndex: 10}}>
          <LoginNavigation />
          <MainNavigation />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
