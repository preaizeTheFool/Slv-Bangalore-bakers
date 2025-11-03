import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Location = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Visit Us</h1>
        <p className="text-xl text-muted-foreground mb-12 text-center">
          Stop by our bakery and experience the aroma of freshly baked goods
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">SLV Bakers</p>
              <p className="text-muted-foreground">Rayagada, Odisha</p>
              <p className="text-muted-foreground">Main Rd, Rama Krishna Nagar,</p>
              <p className="text-muted-foreground">India - 765001</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Opening Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monday - Friday</span>
                <span className="font-semibold">7:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Saturday</span>
                <span className="font-semibold">7:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sunday</span>
                <span className="font-semibold">8:00 AM - 8:00 PM</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">
                <span className="text-muted-foreground">Phone:</span>{' '}
                <a href="tel:+919876543210" className="font-semibold hover:text-primary">
                  +91 98765 43210
                </a>
              </p>
              <p>
                <span className="text-muted-foreground">WhatsApp:</span>{' '}
                <a href="https://wa.me/919876543210" className="font-semibold hover:text-primary">
                  +91 98765 43210
                </a>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a href="mailto:info@slvbakers.com" className="text-lg font-semibold hover:text-primary">
                info@slvbakers.com
              </a>
              <p className="text-muted-foreground mt-2">
                For bulk orders and catering inquiries
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Map placeholder */}
        <Card className="overflow-hidden">
          <div className="aspect-video bg-secondary flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
              <p className="text-lg font-semibold mb-2">Find us on the map</p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d964798.5438672345!2d82.3541996!3d19.1626664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3b435853bcf149%3A0xd04db1d0513a0aa4!2sSLV%20Bengaluru%20Iyyanagar%20Bakery%20Rayagada!5e0!3m2!1sen!2sin!4v1762165945185!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <p className="text-muted-foreground">
                Visit us at Main Rd, Rama Krishna Nagar, Rayagada, Odisha
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Location;
