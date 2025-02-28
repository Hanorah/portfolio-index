import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub, FaInstagram, FaDribbble } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi"; // Import arrow icon

const socialLinks = [
  { href: "https://twitter.com/hanorah", icon: <FaTwitter /> },
  { href: "https://www.facebook.com/", icon: <FaFacebook /> },
  { href: "https://linkedin.com/in/hanorah", icon: <FaLinkedin /> },
  { href: "https://github.com/hanorah", icon: <FaGithub /> },
  { href: "https://dribbble.com/hanorah", icon: <FaDribbble /> },
  { href: "https://instagram.com/hanorah", icon: <FaInstagram /> },
];

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6">
      <div className="container mx-auto flex flex-col items-center md:flex-row justify-between px-6">
        {/* Branding & Copyright */}
        <p className="text-sm text-white">© 2025 Hanorah. All rights reserved.</p>

        {/* Social Media Icons */}
        <div className="flex gap-5">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 transition-transform transform hover:scale-110 text-xl"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* See More Projects Link with Animated Arrow */}
        <a
          href="https://portfolio-fqgncfzah-hanorahs-projects.vercel.app/projects"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-white hover:text-yellow-300 transition-colors group"
        >
          See more projects
          <FiArrowRight className="text-lg transition-transform transform group-hover:translate-x-2" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
