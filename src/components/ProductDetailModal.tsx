import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { MenuItem } from '@/contexts/CartContext';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

interface ProductDetailModalProps {
  product: MenuItem | null;
  open: boolean;
  onClose: () => void;
}

const ProductDetailModal = ({ product, open, onClose }: ProductDetailModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>('standard');
  const { addToCart } = useCart();

  if (!product) return null;

  // Size options based on category
  const getSizeOptions = () => {
    if (product.category === 'Cakes') {
      return [
        { id: 'half-kg', label: '500g (Half Kg)', priceMultiplier: 1 },
        { id: '1-kg', label: '1 Kg', priceMultiplier: 2 },
        { id: '1.5-kg', label: '1.5 Kg', priceMultiplier: 3 },
        { id: '2-kg', label: '2 Kg', priceMultiplier: 4 }
      ];
    }
    if (product.category === 'Cookies') {
      return [
        { id: '250g', label: '250g', priceMultiplier: 0.5 },
        { id: '500g', label: '500g', priceMultiplier: 1 },
        { id: '1kg', label: '1 Kg', priceMultiplier: 2 }
      ];
    }
    return [{ id: 'standard', label: 'Standard', priceMultiplier: 1 }];
  };

  const sizeOptions = getSizeOptions();
  const selectedOption = sizeOptions.find(opt => opt.id === selectedSize) || sizeOptions[0];
  const finalPrice = product.price * selectedOption.priceMultiplier;

  const handleAddToCart = () => {
    // Add item with size info in description
    const itemWithSize = {
      ...product,
      price: finalPrice,
      description: selectedOption.id !== 'standard' 
        ? `${product.description} - ${selectedOption.label}`
        : product.description
    };

    for (let i = 0; i < quantity; i++) {
      addToCart(itemWithSize);
    }

    toast({
      title: 'Added to cart',
      description: `${quantity}x ${product.name} (${selectedOption.label})`
    });

    onClose();
    setQuantity(1);
    setSelectedSize('standard');
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{product.name}</DialogTitle>
          <DialogDescription>{product.category}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Product Image */}
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          {/* Size/Weight Options */}
          {sizeOptions.length > 1 && (
            <div>
              <Label className="text-base font-semibold mb-3 block">
                Select Size
              </Label>
              <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
                <div className="grid grid-cols-2 gap-3">
                  {sizeOptions.map(option => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.id} id={option.id} />
                      <Label htmlFor={option.id} className="cursor-pointer flex-1">
                        {option.label}
                        <span className="block text-sm text-muted-foreground">
                          ₹{(product.price * option.priceMultiplier).toFixed(0)}
                        </span>
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          )}

          {/* Quantity Selector */}
          <div>
            <Label className="text-base font-semibold mb-3 block">Quantity</Label>
            <div className="flex items-center gap-4">
              <Button
                size="icon"
                variant="outline"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
              <Button
                size="icon"
                variant="outline"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Price Summary */}
          <div className="border-t pt-4">
            <div className="flex justify-between items-center text-lg">
              <span className="font-semibold">Total Price</span>
              <span className="text-2xl font-bold text-primary">
                ₹{(finalPrice * quantity).toFixed(0)}
              </span>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleAddToCart} className="gap-2">
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
