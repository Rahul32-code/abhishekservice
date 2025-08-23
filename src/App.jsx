import React from "react";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import Service from "./pages/Service";
import Footer from "./components/Footer";
import About from "./pages/About";
import ButtonWhatsapp from "./components/ButtonWhatsapp";
import PhoneButton from "./components/PhoneButton";
import ContactUs from "./pages/ContactUs";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="">
      {/* toaster */}
      <Toaster position="top-center" reverseOrder="false" />

      <Header />

      <Hero />
      <About />
      <Service />
      <ContactUs />

      <Footer />

      {/* scrollToTopwhatsapp & Phone */}
      <ScrollToTop />
      <ButtonWhatsapp />
      <PhoneButton />
    </div>
  );
};

export default App;
