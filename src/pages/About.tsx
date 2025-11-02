import { bakeryConfig } from '@/config/bakeryConfig';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Heart, Clock, Users, ChefHat, Sparkles } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: ChefHat,
      title: 'Expert Bakers',
      description: 'Our skilled bakers bring years of experience and passion to every creation'
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every item is crafted with care using traditional recipes and modern techniques'
    },
    {
      icon: Sparkles,
      title: 'Premium Ingredients',
      description: 'We use only the finest, freshest ingredients sourced from trusted suppliers'
    },
    {
      icon: Clock,
      title: 'Fresh Daily',
      description: 'All our products are baked fresh daily to ensure the best taste and quality'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Proud to serve our community with delicious treats for every occasion'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'FSSAI certified and committed to maintaining the highest hygiene standards'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="outline">Est. 2020</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{bakeryConfig.name}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            {bakeryConfig.tagline}
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <Card>
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Welcome to {bakeryConfig.name}, where tradition meets taste! Founded in the heart of {bakeryConfig.address.city}, 
                  we've been serving the community with freshly baked goods that bring smiles and create memories.
                </p>
                <p>
                  What started as a small family bakery has grown into a beloved local destination for cakes, pastries, 
                  breads, and more. Our commitment to quality, freshness, and customer satisfaction remains unchanged 
                  since day one.
                </p>
                <p>
                  Every morning, our expert bakers arrive before sunrise to prepare the day's delights. From rich 
                  chocolate cakes to crispy puffs, from soft breads to buttery cookies – each product is made with 
                  premium ingredients and a whole lot of love.
                </p>
                <p>
                  We believe that good food brings people together. Whether it's a birthday celebration, a festive 
                  occasion, or just a treat to brighten your day, we're honored to be part of your special moments.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <Card className="bg-accent/50">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Certified & Trusted</h2>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Badge variant="outline">FSSAI Licensed</Badge>
                <span className="text-muted-foreground">{bakeryConfig.business.fssai}</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">GST Registered</Badge>
                <span className="text-muted-foreground">{bakeryConfig.business.gst}</span>
              </div>
            </div>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest standards of food safety and hygiene. Our premises are regularly 
              inspected and we follow strict quality control measures at every step.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
