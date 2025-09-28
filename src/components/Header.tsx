import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-4 px-6 border-b bg-white dark:bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          My Awesome Blog
        </Link>
        <Button asChild>
          <Link to="/new-post">New Post</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;