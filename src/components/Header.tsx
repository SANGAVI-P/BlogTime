import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const NavLinks = () => (
  <>
    <Button asChild variant="ghost">
      <Link to="/about">About</Link>
    </Button>
    <Button asChild>
      <Link to="/new-post">New Post</Link>
    </Button>
  </>
);

const Header = () => {
  return (
    <header className="py-4 px-6 border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-foreground">
          Blogtime
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <NavLinks />
          <ThemeToggle />
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col items-start gap-4 mt-8">
                <NavLinks />
                <div className="pt-4">
                  <ThemeToggle />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;