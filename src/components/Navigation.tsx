import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import LogoImg from "@/assets/Blank Studios_black.png";

import { useLocation } from "react-router-dom";
import { useNavSolidOnScroll } from "./useNavSolidOnScroll";
import { useState } from "react";
import LoginModal from "./LoginModal";
const Navigation = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Jobs", path: "/jobs" },
    { name: "CADGPT", path: "/cadgpt" },
    { name: "Blog", path: "/blog" },
    { name: "Login/Register", path: "/login" },
  ];
  const location = useLocation();
  // Transparent only on homepage root, but solid after hero scroll
  const isHome = location.pathname === "/";
  const navSolid = useNavSolidOnScroll("hero-section");
  const [loginOpen, setLoginOpen] = useState(false);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-white/10 ${isHome ? (navSolid ? "bg-black" : "bg-transparent") : "bg-black"}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={LogoImg}
              alt="Blank Studios"
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.name === "Login/Register" ? (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setLoginOpen(true)}
                  className="rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 px-8 py-3 text-white font-semibold shadow-lg hover:opacity-90 transition-all"
                  style={{ minWidth: 180, textAlign: 'center' }}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </Link>
              )
            )}
            {/* Cart */}
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-white hover:text-primary transition-colors" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-primary text-white text-xs">
                0
              </Badge>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </nav>
  );
};

export default Navigation;
