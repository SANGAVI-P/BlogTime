import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-4 px-6 border-b bg-background">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-foreground">
          Blogtime
        </Link>
        <nav className="flex items-center gap-4">
          <Button asChild variant="ghost">
            <Link to="/about">About</Link>
          </Button>
          <Button asChild>
            <Link to="/new-post">New Post</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;