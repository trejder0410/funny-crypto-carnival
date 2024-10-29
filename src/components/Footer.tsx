import { Github, Twitter, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center gap-3">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=48&h=48" 
              alt="MemeCoin Logo" 
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="text-2xl font-bold">
                Meme<span className="text-primary">Coin</span>
              </h3>
              <p className="text-gray-400">The sweetest crypto on the blockchain</p>
            </div>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <MessageCircle className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 MemeCoin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
