
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, BookOpen, HelpCircle, Settings, Shield, User, Download, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="teen-shield-container flex justify-between items-center py-3">
        <Link to="/" className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-shield-purple" />
          <h1 className="text-xl font-bold text-shield-purple">
            Teen <span className="text-shield-blue">Shield</span>
          </h1>
        </Link>

        <Button
          variant="ghost"
          className="md:hidden p-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>

        <nav
          className={cn(
            "fixed inset-0 top-[57px] z-50 w-full bg-white md:static md:inset-auto md:block md:h-auto md:w-auto",
            isMenuOpen ? "block" : "hidden"
          )}
        >
          <ul className="flex flex-col space-y-4 p-6 md:flex-row md:space-x-6 md:space-y-0 md:p-0">
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 text-gray-700 hover:text-shield-purple"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home size={18} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/learn"
                className="flex items-center gap-2 text-gray-700 hover:text-shield-purple"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen size={18} />
                <span>Learn</span>
              </Link>
            </li>
            <li>
              <Link
                to="/qanda"
                className="flex items-center gap-2 text-gray-700 hover:text-shield-purple"
                onClick={() => setIsMenuOpen(false)}
              >
                <HelpCircle size={18} />
                <span>Q&A</span>
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="flex items-center gap-2 text-gray-700 hover:text-shield-purple"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={18} />
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link
                to="/offline"
                className="flex items-center gap-2 text-gray-700 hover:text-shield-purple"
                onClick={() => setIsMenuOpen(false)}
              >
                <Download size={18} />
                <span>Offline</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
