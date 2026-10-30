import { IndustryPreset } from '../../types/preset';

export const localBusinessPreset: IndustryPreset = {
  id: 'local-business',
  label: 'Local Business',
  industry: 'Food & Hospitality',
  description: 'Warm, approachable layout tailored for brick-and-mortar storefronts, local cafés, artisan eateries, and neighbourhood services.',
  siteConfig: {
    name: 'Oak & Hearth Kitchen',
    description: 'Artisan bakery, organic espresso bar, and farm-to-table seasonal catering in downtown Mill Valley.',
    contact: {
      email: 'gather@oakandhearth.com',
      phone: '+1 (415) 388-9120',
      address: {
        street: '142 Throckmorton Ave',
        city: 'Mill Valley',
        region: 'CA',
        country: 'United States',
        postalCode: '94941',
      },
      hours: [
        { days: 'Monday – Thursday', hours: '7:00 AM – 4:00 PM' },
        { days: 'Friday – Saturday', hours: '7:00 AM – 7:00 PM' },
        { days: 'Sunday', hours: '8:00 AM – 3:00 PM (Brunch Only)' },
      ],
    },
    socialLinks: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      twitter: '',
      linkedin: '',
    },
    pages: {
      about: true,
      services: true,
      portfolio: true,
      testimonials: true,
      blog: false,
      contact: true,
    },
    brand: {
      tagline: 'Handcrafted with organic California grain & local love.',
      foundedYear: 2017,
      logoText: 'OAK & HEARTH',
      badgeText: 'Downtown Mill Valley',
    },
  },
  themeConfig: {
    colors: {
      primary: '#b45309', // Warm amber / terracotta
      primaryHover: '#92400e',
      secondary: '#292524', // Warm stone 800
      secondaryHover: '#1c1917',
      background: '#fafaf9', // Warm stone 50
      foreground: '#1c1917', // Warm dark stone
      muted: '#f5f5f4', // Stone 100
      mutedForeground: '#78716c', // Stone 500
      accent: '#15803d', // Sage / forest green
      accentForeground: '#ffffff',
      card: '#ffffff',
      cardForeground: '#1c1917',
      border: '#e7e5e4', // Stone 200
    },
    typography: {
      headingFont: "'Plus Jakarta Sans', Georgia, serif",
      bodyFont: "'Inter', sans-serif",
    },
    radius: {
      button: '9999px', // Pill / friendly rounded buttons
      card: '1rem',
    },
  },
  navigationConfig: {
    mainNav: [
      { label: 'Menu & Services', href: '/services', requiresPage: 'services' },
      { label: 'Our Story', href: '/about', requiresPage: 'about' },
      { label: 'Catering Gallery', href: '/portfolio', requiresPage: 'portfolio' },
      { label: 'Visit & Hours', href: '/contact', requiresPage: 'contact' },
    ],
    footerNav: [
      {
        title: 'Visit Us',
        items: [
          { label: '142 Throckmorton Ave, Mill Valley, CA', href: '/contact' },
          { label: 'Open Daily from 7:00 AM', href: '/contact' },
          { label: 'Get Driving Directions', href: '/contact' },
        ],
      },
      {
        title: 'Offerings',
        items: [
          { label: 'Sourdough & Breads', href: '/services' },
          { label: 'Espresso Bar', href: '/services' },
          { label: 'Private Event Catering', href: '/services' },
          { label: 'Baking Masterclasses', href: '/services' },
        ],
      },
      {
        title: 'Community',
        items: [
          { label: 'Instagram Feed', href: 'https://instagram.com', isExternal: true },
          { label: 'Local Farmers We Support', href: '/about' },
          { label: 'Customer Reviews', href: '/contact' },
        ],
      },
    ],
    ctaButton: {
      label: 'Order Catering',
      href: '/contact',
    },
  },
  homeSections: [
    { id: 'hero', variant: 'centered' },
    { id: 'services', variant: 'cards' },
    { id: 'about', variant: 'image-text' },
    { id: 'portfolio', variant: 'grid' },
    { id: 'testimonials', variant: 'cards' },
    { id: 'faq', variant: 'accordion' },
    { id: 'contact', variant: 'details' },
    { id: 'cta', variant: 'banner' },
  ],
  data: {
    hero: {
      badge: 'Locally Sourced & Freshly Baked Daily',
      title: 'Handcrafted sourdough, slow espresso & warm community tables.',
      highlightedText: 'warm community tables',
      description:
        'Every morning at 4:30 AM our hearth ovens fire up with stone-ground heirloom grains, pasture-raised butter, and wild natural starters.',
      primaryCta: { label: 'Explore Our Offerings', href: '/services' },
      secondaryCta: { label: 'Find Us & Hours', href: '/contact' },
      trustBadges: ['100% Organic Flours', 'Zero Additives', 'Fair Trade Beans', 'Voted Best Marin Bakery 2024'],
      imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
      stats: [
        { value: '36hr', label: 'Slow Fermentation' },
        { value: '850+', label: 'Daily Fresh Loaves' },
        { value: '7 Yrs', label: 'Serving Mill Valley' },
      ],
    },
    services: {
      badge: 'Fresh From the Hearth',
      title: 'What We Craft Daily',
      description: 'Simple, uncompromised culinary traditions made with clean ingredients from Northern California farms.',
      items: [
        {
          id: 'artisan-sourdough',
          title: 'Naturally Leavened Sourdough',
          description: 'Crusty, blistered batards and boules fermented for 36 hours for rich flavour and gentle digestion.',
          iconName: 'Wheat',
          features: ['Heirloom Sonora Grain', 'Seeded Country Rye', 'Olive & Rosemary Boule', 'Baguette Tradition'],
          popular: true,
        },
        {
          id: 'pastries',
          title: 'Viennoiserie & Morning Pastry',
          description: 'Laminated European butter croissants, seasonal fruit galettes, and morning buns spiced with cardamom.',
          iconName: 'Coffee',
          features: ['Classic Butter Croissant', 'Pain au Chocolat', 'Cardamom Knots', 'Seasonal Brioche Tarts'],
        },
        {
          id: 'catering',
          title: 'Event Catering & Grazing Tables',
          description: 'Stunning artisanal grazing spreads, sandwich platters, and dessert boards for local gatherings and corporate events.',
          iconName: 'Utensils',
          features: ['Artisan Cheese & Charcuterie', 'Rustic Focaccia Sandwiches', 'Mini Pastry Boxes', 'Full Event Setup'],
        },
        {
          id: 'espresso',
          title: 'Specialty Espresso & Teas',
          description: 'Ethically sourced single-origin roasts poured with precision and local Straus Family organic dairy.',
          iconName: 'CupSoda',
          features: ['Direct Trade Espresso', 'Organic Matcha Lattes', 'Housemade Vanilla Syrups', 'Cold Brew on Tap'],
        },
      ],
    },
    about: {
      badge: 'Our Heritage',
      title: 'Rooted in timeless baking craft and good neighbours.',
      story: [
        'Oak & Hearth began in 2017 when head baker Mateo Ruiz started trading sourdough loaves with neighbours over his garden fence.',
        'Today, our bakery serves hundreds of friends and families every morning. We know our farmers by their first names and mill our grains fresh every week.',
      ],
      mission: 'To bring our community together around honest, nutrient-dense bread crafted with reverence for traditional fermentation.',
      stats: [
        { value: '100%', label: 'Organic California Grain' },
        { value: '7 Days', label: 'Fresh Hearth Baking' },
        { value: '12', label: 'Local Farm Partners' },
        { value: '4.9 ★', label: 'Google & Yelp Rating' },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Interior of Oak & Hearth Artisan Bakery and Cafe in Mill Valley',
      values: [
        { title: 'Wild Yeast Leavening', description: 'Zero commercial yeast. Only wild airborne cultures capturing Marin terroir.' },
        { title: 'Zero Waste Kitchen', description: 'Surplus bread is donated daily to local family shelters and food pantries.' },
        { title: 'Transparent Sourcing', description: 'Every flour, dairy, and coffee origin is posted openly on our chalkboards.' },
      ],
    },
    portfolio: {
      badge: 'Visual Gallery',
      title: 'Moments from Our Hearth & Tables',
      description: 'A glimpse into our morning bakes, private events, and communal celebrations.',
      categories: ['All', 'Breads', 'Pastries', 'Catering', 'Café'],
      items: [
        {
          id: 'crumb-shot',
          title: 'Heritage Country Sourdough',
          category: 'Breads',
          description: 'Open, custardy crumb with blistered caramelized crust.',
          imageUrl: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80',
          client: 'Daily Bakery Batch',
          year: '2025',
          tags: ['36hr Ferment', 'Stone-ground'],
        },
        {
          id: 'grazing-table',
          title: 'Sunset Vineyard Grazing Spread',
          category: 'Catering',
          description: 'A 24-foot farm-to-table grazing table created for a local private anniversary celebration.',
          imageUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80',
          client: 'Private Winery Event',
          year: '2024',
          tags: ['Full Setup', 'Local Cheeses'],
        },
        {
          id: 'croissant-layers',
          title: 'Golden Honey Croissant Layers',
          category: 'Pastries',
          description: '72 delicate laminated layers using 84% cultured butter.',
          imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
          client: 'Morning Viennoiserie',
          year: '2025',
          tags: ['European Butter', 'Hand Rolled'],
        },
      ],
    },
    testimonials: {
      badge: 'Neighbourhood Words',
      title: 'Loved by families, food critics, and early morning runners.',
      items: [
        {
          id: 'l-1',
          quote: 'The seeded sourdough batard from Oak & Hearth is the gold standard. Nothing else in the Bay Area comes close to this crust and depth of flavour.',
          author: 'Claire Hemmings',
          role: 'Mill Valley Resident',
          company: 'Food & Wine Contributor',
          avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
          rating: 5,
        },
        {
          id: 'l-2',
          quote: 'We hired Mateo and his catering team for our garden wedding. The grazing tables and fresh bread baskets were the single most talked-about part of the evening!',
          author: 'Daniel & Sarah Rossi',
          role: 'Wedding Hosts',
          company: 'Local Clients',
          avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
          rating: 5,
        },
        {
          id: 'l-3',
          quote: 'The aroma when you walk in at 7 AM is heaven. Friendly staff, exquisite espresso, and genuinely kind people who care about this town.',
          author: 'Robert Sterling',
          role: 'Architect',
          company: 'Downtown Mill Valley',
          avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
          rating: 5,
        },
      ],
    },
    pricing: {
      badge: 'Catering Packages',
      title: 'Artisan Catering for Gatherings of Any Size',
      description: 'Host your next brunch, team offsite, or wedding with wholesome handcrafted spreads.',
      plans: [
        {
          id: 'morning-basket',
          name: 'The Morning Hearth Box',
          description: 'Perfect for breakfast meetings, team kickoffs, and family gatherings of 10–12 guests.',
          price: '$180',
          period: 'box (serves 12)',
          features: [
            { text: '12 Assorted warm croissants & pastries', included: true },
            { text: 'Fresh whipped Straus butter & seasonal jam', included: true },
            { text: 'Carved country sourdough loaf', included: true },
            { text: 'Airpot of organic Ethiopian drip coffee', included: true },
            { text: 'Full compostable cutlery & napkins', included: true },
            { text: 'On-site staff server', included: false },
          ],
          ctaText: 'Order Morning Box',
          ctaHref: '/contact',
        },
        {
          id: 'grazing-spread',
          name: 'Artisan Grazing Table',
          description: 'Our signature festive spread for weddings, cocktail hours, and community milestones.',
          price: '$45',
          period: 'per person (min 25)',
          popular: true,
          features: [
            { text: 'Multi-tiered wooden display board setup', included: true },
            { text: '5 Handcrafted sourdough & cracker varieties', included: true },
            { text: 'Curated Northern California cheeses & meats', included: true },
            { text: 'Local honeycombs, figs & house pickles', included: true },
            { text: 'Delivery, styling & table florals', included: true },
            { text: 'Post-event cleanup & breakdown', included: true },
          ],
          ctaText: 'Inquire for Dates',
          ctaHref: '/contact',
        },
        {
          id: 'private-dining',
          name: 'Full Café Evening Buyout',
          description: 'Exclusive use of our dining room, outdoor heated patio, and private kitchen team for up to 40 seated guests.',
          price: '$2,400',
          period: 'evening + menu',
          features: [
            { text: 'Exclusive 5-hour private venue access', included: true },
            { text: 'Custom 4-course family-style dinner', included: true },
            { text: 'Sommelier selected natural wine pairing', included: true },
            { text: 'Personal chef & dedicated waitstaff', included: true },
            { text: 'Custom printed commemorative menus', included: true },
            { text: 'Sound system with custom playlists', included: true },
          ],
          ctaText: 'Book Café Venue',
          ctaHref: '/contact',
        },
      ],
    },
    faq: {
      badge: 'Visiting Us',
      title: 'Helpful Information Before You Drop By',
      description: 'Everything you need to know about parking, ordering ahead, and dietary requests.',
      items: [
        {
          question: 'Can I pre-order sourdough loaves for pickup?',
          answer: 'Yes! We encourage pre-ordering at least 24 hours in advance via our contact form or phone so we can guarantee your favourite batard is reserved before we sell out.',
        },
        {
          question: 'Do you offer gluten-free bread options?',
          answer: 'While our main sourdoughs are made from traditional wheat and rye, we bake a dedicated 100% gluten-free seed-and-oat loaf every Wednesday and Saturday in a sanitized station.',
        },
        {
          question: 'Is there parking available nearby?',
          answer: 'There is ample street parking on Throckmorton Ave and a public municipal parking lot directly behind the depot just 2 minutes walking distance from our front doors.',
        },
        {
          question: 'Are dogs allowed on the patio?',
          answer: 'Absolutely! Our garden patio is dog-friendly. We even have fresh water bowls and housemade whole-grain dog biscuits baked fresh every morning.',
        },
        {
          question: 'How far in advance should we book event catering?',
          answer: 'For small morning pastry boxes, 48 hours notice is sufficient. For large wedding grazing tables or café evening buyouts, we recommend reserving 4 to 8 weeks in advance.',
        },
      ],
    },
    cta: {
      badge: 'Stop By This Week',
      title: 'There is always a fresh warm loaf waiting for you.',
      description: 'Visit our bakery counter at 142 Throckmorton Ave, Mill Valley, or get in touch for custom catering requests.',
      primaryCta: { label: 'Get Directions & Hours', href: '/contact' },
      secondaryCta: { label: 'Explore Catering', href: '/services' },
    },
  },
};
