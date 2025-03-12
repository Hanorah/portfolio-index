import clsx from "clsx";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";

const navItems = [
  { name: "Hello", path: "https://portfolio-hanorahs-projects.vercel.app/" },
  { name: "Project", path: "https://portfolio-hanorahs-projects.vercel.app/projects" },
  { name: "Resume", path: "https://portfolio-hanorahs-projects.vercel.app/resume" },
  { name: "About", path: "https://portfolio-hanorahs-projects.vercel.app/about" },
  { name: "Contact", path: "https://portfolio-hanorahs-projects.vercel.app/contact" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navContainerRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = (e) => {
    if (navContainerRef.current && !navContainerRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(navContainerRef.current, {
        x: 0,
        opacity: 1,
        display: "flex",
        duration: 0.3,
      });
      document.addEventListener("click", closeMenu);
    } else {
      gsap.to(navContainerRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          if (navContainerRef.current) {
            navContainerRef.current.style.display = "none";
          }
        },
      });
      document.removeEventListener("click", closeMenu);
    }
    return () => document.removeEventListener("click", closeMenu);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed inset-x-0 top-0 z-50 h-16 transition-all duration-700 ${isScrolled ? "bg-black shadow-lg" : "bg-transparent"}`}>
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-2">
          <div className="flex items-center gap-4">
            <img src="/img/logo.png" alt="logo" className="w-16" />
            <a href="https://portfolio-hanorahs-projects.vercel.app/projects" target="_blank" rel="noopener noreferrer">
              <Button id="product-button" title="Projects" rightIcon={<TiLocationArrow />} containerClass="bg-blue-50 flex items-center justify-center gap-1" />
            </a>
          </div>
          <div className="md:flex hidden gap-6">
            {navItems.map((item, index) => (
              <a key={index} href={item.path} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-white pr-6">
                {item.name}
              </a>
            ))}
          </div>
          <div className="relative md:hidden bg-white flex-center gap-1 rounded-full w-10 h-12">
            <button onClick={toggleMenu} className="relative text-black text-3xl ">
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        ref={navContainerRef}
        style={{ display: isMenuOpen ? "flex" : "none" }}
        className="fixed top-20 right-20 h-[35%] w-[35%] bg-black flex-col items-center justify-center gap-5 shadow-lg transform translate-x-full opacity-0 rounded-bl-[10%] rounded-tr-[10%] rounded-br-[10%] rounded-tl-[10%] md:hidden"
      >
        {navItems.map((item, index) => (
          <a key={index} href={item.path} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-white w-full text-center">
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
