
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, User, BookOpen, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 font-serif text-xl font-bold">
            <BookOpen className="h-6 w-6 text-bookworm-green" />
            <span>Bookworm<span className="text-bookworm-green">Swap</span></span>
          </Link>
        </div>

        {!isMobile ? (
          <>
            <div className="flex items-center space-x-4">
              <Link to="/browse" className="text-foreground/80 hover:text-foreground">Browse</Link>
              <Link to="/wishlist" className="text-foreground/80 hover:text-foreground">Wishlist</Link>
              <Link to="/about" className="text-foreground/80 hover:text-foreground">About</Link>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="outline">Sign In</Button>
              <Button>Register</Button>
            </div>
          </>
        ) : (
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div className="absolute left-0 right-0 z-50 border-b bg-background p-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-3">
            <Link to="/browse" className="p-2 hover:bg-muted" onClick={toggleMenu}>Browse</Link>
            <Link to="/wishlist" className="p-2 hover:bg-muted" onClick={toggleMenu}>Wishlist</Link>
            <Link to="/about" className="p-2 hover:bg-muted" onClick={toggleMenu}>About</Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" onClick={toggleMenu}>Sign In</Button>
              <Button onClick={toggleMenu}>Register</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
