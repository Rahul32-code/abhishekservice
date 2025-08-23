import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkedAlt,
  FaPhone,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "@/logo.png";
import { MdOutlineEmail } from "react-icons/md";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const socialLinks = [
  {
    href: "https://www.instagram.com/abhishek.dmagency/",
    label: "Instagram",
    icon: <FaInstagram />,
    color: "text-white",
    bg: "bg-[linear-gradient(to_right,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)]",
  },
  {
    href: "https://www.facebook.com/abhishek.agency",
    label: "Facebook",
    icon: <FaFacebookF />,
    color: "text-white",
    bg: "bg-blue-800",
  },
  {
    href: "https://www.linkedin.com/company/abhishek-dm-agency",
    label: "LinkedIn",
    icon: <FaLinkedinIn />,
    color: "text-white",
    bg: "bg-blue-600",
  },
];

const contactInfo = [
  {
    icon: <FaPhone className="text-green-600" />,
    label: "Phone",
    value: "+91 9266594942",
    href: "tel:+919266594942",
  },
  {
    icon: <MdOutlineEmail className="text-green-600" />,
    label: "Email",
    value: "info@abhishekdm.com",
    href: "mailto:info@abhishekdm.com",
  },
  {
    icon: <FaMapMarkedAlt className="text-green-600" />,
    label: "Address",
    value: "New Delhi, India",
  },
];

const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#service" },
  { name: "Contact Us", href: "#contact" },
];

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollY = window.scrollY;
      const heroSection = document.getElementById("hero");

      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsVisible(scrollY > heroHeight);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-16 mt-10 relative">
      <div className="container px-4 lg:px-8 grid md:grid-cols-3 gap-10">
        {/* Brand & Social */}
        <div>
          <div className="flex items-center mb-4">
            <img src={logo} alt="Logo" width="60%" />
          </div>
          <p className="text-gray-400 mb-6">
            Abhishek Digital Marketing Agency provides expert SEO services,
            WordPress website design, custom code website development, and
            complete digital marketing solutions. Our mission is to craft
            tailored strategies that drive business growth, enhance online
            visibility, and deliver measurable results—powered by creativity,
            dedication, and trust.
          </p>

          <div className="flex space-x-2">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:scale-110 transform transition duration-300 p-2 rounded-xl ${link.bg} ${link.color} text-xl`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2">
            Contact Us
          </h3>
          <ul className="space-y-4">
            {contactInfo.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                {item.icon}
                {item.href ? (
                  <a
                    href={item.href}
                    className="hover:text-green-600 transition-colors text-white"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-white">{item.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-300">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:text-green-600 transition">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center mt-10 text-sm text-gray-500 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} Abhishek Digital Marketing Agency. All
        rights reserved.
      </div>

      {/* Scroll to Top Button */}
      <div
        className={`fixed bottom-8 left-8 flex items-center justify-center transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <a
          href="#hero"
          className="text-white shadow-lg cursor-pointer rounded-xl p-2 bg-green-900 hover:bg-green-800 transition duration-300 animate-bounce"
        >
          <ArrowUp className="text-6xl w-8 h-8" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
