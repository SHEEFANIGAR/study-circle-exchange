
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-serif text-xl font-bold">
              <BookOpen className="h-6 w-6 text-bookworm-green" />
              <span>Bookworm<span className="text-bookworm-green">Swap</span></span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A platform for students to share and exchange academic resources sustainably.
            </p>
          </div>
          
          <div>
            <h3 className="mb-3 text-sm font-medium">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/browse" className="text-muted-foreground hover:text-foreground">Browse</Link></li>
              <li><Link to="/wishlist" className="text-muted-foreground hover:text-foreground">Wishlist</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-3 text-sm font-medium">Account</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/register" className="text-muted-foreground hover:text-foreground">Register</Link></li>
              <li><Link to="/login" className="text-muted-foreground hover:text-foreground">Sign In</Link></li>
              <li><Link to="/profile" className="text-muted-foreground hover:text-foreground">My Profile</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-3 text-sm font-medium">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© 2025 BookwormSwap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
