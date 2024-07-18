import MainNavigation from "@/_components/MainNavigation";
import { Merriweather, Open_Sans } from "next/font/google";
import "../_styles/global.scss";
import LoginNavigation from "@/_components/LoginNavigation";
import { LoginContextProvider } from "@/_context/LoginContext";

const merriweather = Merriweather({ subsets: ["latin"], weight: "400" });
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal"],
});

export const metadata = {
  title: "Oddaj rzeczy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <LoginContextProvider>
          <div style={{ position: "absolute", right: 0, zIndex: 10 }}>
            <LoginNavigation />
            <MainNavigation />
          </div>
          <main>{children}</main>
        </LoginContextProvider>
      </body>
    </html>
  );
}
