import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { bakeryConfig } from '@/config/bakeryConfig';
import { Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, clearCart, total } = useCart();

  const subtotal = total;
  const tax = subtotal * bakeryConfig.pricing.taxRate;
  const deliveryEstimate = subtotal >= bakeryConfig.pricing.freeDeliveryThreshold ? 0 : bakeryConfig.pricing.deliveryFee;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">Browse our menu and add some delicious items!</p>
          <Link to="/menu">
            <Button size="lg">View Menu</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Shopping Cart</h1>
          <Button variant="outline" onClick={clearCart}>
            Clear Cart
          </Button>
        </div>

        <div className="space-y-4 mb-8">
          {cart.map(item => (
            <Card key={item.id}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-muted-foreground text-sm">{item.category}</p>
                    <p className="text-primary font-bold mt-1">₹{item.price}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-lg">₹{item.price * item.quantity}</p>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeFromCart(item.id)}
                      className="mt-2"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Remove
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>GST ({(bakeryConfig.pricing.taxRate * 100).toFixed(0)}%)</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Estimated Delivery</span>
              <span>
                {deliveryEstimate === 0 ? (
                  <span className="text-green-600">FREE</span>
                ) : (
                  `₹${deliveryEstimate} (or FREE on ₹${bakeryConfig.pricing.freeDeliveryThreshold}+)`
                )}
              </span>
            </div>

            <Separator />

            <div className="flex justify-between text-lg font-bold">
              <span>Estimated Total</span>
              <span className="text-primary">₹{(subtotal + tax).toFixed(2)}</span>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              Final delivery charges will be calculated at checkout
            </p>
          </CardContent>
          <CardFooter>
            <Button 
              size="lg" 
              className="w-full"
              onClick={() => navigate('/checkout')}
            >
              Proceed to Checkout
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
