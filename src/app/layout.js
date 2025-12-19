import NavBar from "@/components/layout/NavBar/NavBar";
import Footer from "@/components/layout/Footer/Footer";
import "./globals.scss";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/swiperStyles.scss";

export const metadata = {
  title: "OHlalá",
  description: "Ohlalá",
}; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="modal-root"/>
        <NavBar />
        <main id="main-container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}