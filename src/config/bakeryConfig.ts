// Central configuration for bakery details
// Edit these values to customize your bakery information

export const bakeryConfig = {
  name: 'SLV Bakers',
  tagline: 'Freshly Baked with Love',
  
  // Contact Information
  phone: '+91 98765 43210',
  email: 'hello@slvbakers.com',
  whatsapp: '+919876543210',
  
  // Address
  address: {
    street: '123 Bakery Street',
    area: 'MG Road',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560001',
    country: 'India'
  },
  
  // Opening Hours
  openingHours: {
    weekdays: '8:00 AM - 9:00 PM',
    weekends: '8:00 AM - 10:00 PM',
    monday: '8:00 AM - 9:00 PM',
    tuesday: '8:00 AM - 9:00 PM',
    wednesday: '8:00 AM - 9:00 PM',
    thursday: '8:00 AM - 9:00 PM',
    friday: '8:00 AM - 9:00 PM',
    saturday: '8:00 AM - 10:00 PM',
    sunday: '8:00 AM - 10:00 PM'
  },
  
  // Social Media
  social: {
    facebook: 'https://facebook.com/slvbakers',
    instagram: 'https://instagram.com/slvbakers',
    twitter: 'https://twitter.com/slvbakers'
  },
  
  // Map Location
  mapLocation: {
    lat: 12.9716,
    lng: 77.5946,
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d964798.5438672345!2d82.3541996!3d19.162666400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3b435853bcf149%3A0xd04db1d0513a0aa4!2sSLV%20Bengaluru%20Iyyanagar%20Bakery%20Rayagada!5e0!3m2!1sen!2sin!4v1762105122697!5m2!1sen!2sin"
},
  // Pricing Configuration
  pricing: {
    currency: '₹',
    taxRate: 0.05, // 5% GST
    deliveryFee: 40, // ₹40 delivery charge
    freeDeliveryThreshold: 500, // Free delivery above ₹500
    minimumOrder: 100 // Minimum order ₹100
  },
  
  // Business Information
  business: {
    gst: 'GST123456789',
    fssai: 'FSSAI987654321'
  }
};
