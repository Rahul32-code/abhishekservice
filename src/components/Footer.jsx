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
import { li } from "framer-motion/client";

const socialLinks = [
  {
    href: "#",
    label: "Instagram",
    icon: <FaInstagram />,
    color: "text-white",
    bg: "bg-[linear-gradient(to_right,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)]",
  },
  {
    href: "#",
    label: "Facebook",
    icon: <FaFacebookF />,
    color: "text-white",
    bg: "bg-blue-800",
  },
  {
    href: "#",
    label: "LinkedIn",
    icon: <FaLinkedinIn />,
    color: "text-white",
    bg: "bg-blue-600",
  },
];

const contactInfo = [
  {
    icon: <FaPhone className="text-sky-300" />,
    label: "Phone",
    value: "+91 (234) 567-89",
    href: "tel:+9123456789",
  },
  {
    icon: <MdOutlineEmail className="text-sky-300" />,
    label: "Email",
    value: "info@gmail.com",
    href: "mailto:info@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt className="text-sky-300" />,
    label: "Address",
    value: "123 Dental Street, Smile City, India",
  },
];

const quickLinks = [
  {
    name: "About Us",
    href: "#about",
  },
  {
    name: "Services",
    href: "#service",
  },
  {
    name: "About Us",
    href: "#about",
  },
  {
    name: "Contact Us",
    href: "#contact",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 mt-10">
      <div className="container px-4 lg:px-8 grid md:grid-cols-3 gap-10">
        {/* Brand & Social */}
        <div>
          <div className="flex items-center mb-4 ">
            <img src={logo} alt="Logo" width="60%" />
          </div>
          <p className="text-gray-400 mb-6 ">
            Providing quality dental care with compassion and professionalism.
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
                    className="hover:text-sky-400 transition-colors text-white"
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

        {/* Quick Links or Additional Section (Optional) */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-300">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white/20 transition">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center mt-10 text-sm text-gray-500 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} Rahul. All rights reserved.
      </div>
    </footer>
  );
};

// const Footer = () => {
//   return (
//     <footer className="bg-white/25 text-black pt-16 pb-16 relative overflow-hidden">
//       {/* Optional decorative background image */}
//       <div className="absolute bottom-0 left-0 right-0 h-20 bg-cover opacity-20"></div>

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Logo & Social */}
//         <div className="flex flex-col items-center mb-14">
//           <div className="flex items-center mb-6">
//             <div className="bg-white/20 p-3 rounded-full mr-4">
//               <FaTooth className="text-2xl text-green-600" />
//             </div>
//             <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-500">
//               Abhishek
//             </h2>
//           </div>

//           <div className="flex space-x-6 mb-8">
//             {socialLink.map((link, index) => (
//               <a
//                 key={index}
//                 href={link.href}
//                 className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:translate-y-1"
//               >
//                 {link.icon}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Contact Info */}
//         <div className="bg-white/5 backdrop:blur-sm p-8 rounded-xl border border-white/10 hover:border-sky-300 transition-colors max-w-md mx-auto">
//           <h3 className="text-xl flex items-center mb-6 font-semibold">
//             <FaPhone className="mr-3 text-sky-300" />
//             Contact Us
//           </h3>
//           <ul className="space-y-4">
//             {contactInfo.map((item, index) => (
//               <li key={index} className="flex items-start">
//                 {item.icon}
//                 {item.text}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

export default Footer;
