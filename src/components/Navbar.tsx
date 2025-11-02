import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Sun, Moon, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useCart } from '@/contexts/CartContext';
import { bakeryConfig } from '@/config/bakeryConfig';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

const Navbar = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const { cart } = useCart();

  const isActive = (path: string) => location.pathname === path;

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {bakeryConfig.name}
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button variant={isActive('/') ? 'default' : 'ghost'}>Home</Button>
            </Link>
            <Link to="/menu">
              <Button variant={isActive('/menu') ? 'default' : 'ghost'}>Menu</Button>
            </Link>
            <Link to="/order-history">
              <Button variant={isActive('/order-history') ? 'default' : 'ghost'}>Orders</Button>
            </Link>
            <Link to="/location">
              <Button variant={isActive('/location') ? 'default' : 'ghost'}>Location</Button>
            </Link>
            <Link to="/contact">
              <Button variant={isActive('/contact') ? 'default' : 'ghost'}>Contact</Button>
            </Link>
            <Link to="/about">
              <Button variant={isActive('/about') ? 'default' : 'ghost'}>About</Button>
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  {theme === 'light' && <Sun className="h-5 w-5" />}
                  {theme === 'dark' && <Moon className="h-5 w-5" />}
                  {theme === 'system' && <Monitor className="h-5 w-5" />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')}>
                  <Sun className="mr-2 h-4 w-4" />
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                  <Moon className="mr-2 h-4 w-4" />
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                  <Monitor className="mr-2 h-4 w-4" />
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
