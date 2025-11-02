import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useOrders } from '@/contexts/OrderContext';
import { bakeryConfig } from '@/config/bakeryConfig';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Phone, Mail, MapPin, Clock, Package } from 'lucide-react';

const OrderConfirmation = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();
  const { getOrderById } = useOrders();

  const order = orderId ? getOrderById(orderId) : null;

  useEffect(() => {
    if (!order) {
      const timer = setTimeout(() => {
        navigate('/menu');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [order, navigate]);

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Order not found</p>
          <p className="text-muted-foreground">Redirecting to menu...</p>
        </div>
      </div>
    );
  }

  const statusColor = {
    pending: 'bg-yellow-500',
    confirmed: 'bg-blue-500',
    preparing: 'bg-orange-500',
    ready: 'bg-green-500',
    delivered: 'bg-green-700',
    cancelled: 'bg-red-500'
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Success Message */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-block mb-4">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto animate-scale-in" />
          </div>
          <h1 className="text-4xl font-bold mb-2">Order Placed Successfully!</h1>
          <p className="text-muted-foreground text-lg">
            Thank you for your order. We'll start preparing it right away.
          </p>
        </div>

        {/* Order Details Card */}
        <Card className="mb-6 animate-fade-in">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl">Order #{order.id}</CardTitle>
                <CardDescription>
                  Placed on {new Date(order.createdAt).toLocaleString('en-IN')}
                </CardDescription>
              </div>
              <Badge className={statusColor[order.status]}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Order Items */}
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Package className="h-4 w-4" />
                Items Ordered
              </h3>
              <div className="space-y-2">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b last:border-0">
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Pricing Breakdown */}
            <div>
              <h3 className="font-semibold mb-3">Price Details</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{order.pricing.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>GST ({(bakeryConfig.pricing.taxRate * 100).toFixed(0)}%)</span>
                  <span>₹{order.pricing.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Delivery Fee</span>
                  <span>
                    {order.pricing.deliveryFee === 0 ? (
                      <span className="text-green-600">FREE</span>
                    ) : (
                      `₹${order.pricing.deliveryFee.toFixed(2)}`
                    )}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Paid</span>
                  <span className="text-primary">₹{order.pricing.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Customer & Delivery Info */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-3">Customer Details</h3>
                <div className="space-y-2 text-sm">
                  <p className="font-medium">{order.customerDetails.name}</p>
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-3 w-3" />
                    {order.customerDetails.phone}
                  </p>
                  {order.customerDetails.email && (
                    <p className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="h-3 w-3" />
                      {order.customerDetails.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">
                  {order.deliveryDetails.type === 'pickup' ? 'Pickup Details' : 'Delivery Address'}
                </h3>
                {order.deliveryDetails.type === 'pickup' ? (
                  <div className="space-y-2 text-sm">
                    <p className="flex items-start gap-2 text-muted-foreground">
                      <MapPin className="h-3 w-3 mt-1" />
                      <span>
                        {bakeryConfig.address.street}, {bakeryConfig.address.area}<br />
                        {bakeryConfig.address.city}, {bakeryConfig.address.state} {bakeryConfig.address.pincode}
                      </span>
                    </p>
                    <p className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {bakeryConfig.openingHours.weekdays}
                    </p>
                  </div>
                ) : (
                  <div className="text-sm text-muted-foreground">
                    <p>{order.deliveryDetails.address}</p>
                    <p>{order.deliveryDetails.city} - {order.deliveryDetails.pincode}</p>
                  </div>
                )}
              </div>
            </div>

            <Separator />

            {/* Payment Method */}
            <div>
              <h3 className="font-semibold mb-2">Payment Method</h3>
              <p className="text-sm text-muted-foreground capitalize">
                {order.paymentMethod === 'cod' ? 'Cash on Delivery' : order.paymentMethod}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/order-history">View Order History</Link>
          </Button>
          <Button asChild size="lg">
            <Link to="/menu">Continue Shopping</Link>
          </Button>
        </div>

        {/* Contact Info */}
        <Card className="mt-8 bg-accent/50">
          <CardContent className="pt-6 text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Questions about your order? Contact us:
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <a href={`tel:${bakeryConfig.phone}`} className="flex items-center gap-2 hover:text-primary">
                <Phone className="h-4 w-4" />
                {bakeryConfig.phone}
              </a>
              <a href={`mailto:${bakeryConfig.email}`} className="flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4" />
                {bakeryConfig.email}
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrderConfirmation;
