const SPACE_ID = '290907279142737';
const TOKEN = 'LnoZbr7ZBMGZgiwE4sHR3gtt-150914739856668-APRVumsvtUUy8fAHTQmF';
const BASE_URL = `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}`;

async function apiCall(endpoint, method = 'GET', data = null) {
  const options = {
    method,
    headers: {
      'Authorization': TOKEN,
      'Content-Type': 'application/json',
    },
  };
  
  if (data) {
    options.body = JSON.stringify(data);
  }
  
  const response = await fetch(`${BASE_URL}${endpoint}`, options);
  const result = await response.json();
  
  if (!response.ok) {
    console.error(`Error on ${endpoint}:`, result);
    throw new Error(`API call failed: ${JSON.stringify(result)}`);
  }
  
  return result;
}

async function createStory() {
  console.log('Creating landing page story...\n');
  
  const storyData = {
    story: {
      name: 'Home',
      slug: 'home',
      content: {
        component: 'landing_page',
        site_title: 'Aussie Move Masters - Professional Removalists Perth',
        phone_number: '0414 910 000',
        sections: [
          // Hero Section
          {
            component: 'hero',
            heading: 'Perth\'s Most Trusted Removalists',
            subheading: 'Professional, Affordable, and Reliable Moving Services Across Perth',
            show_quote_form: true,
            _uid: 'hero_' + Date.now()
          },
          // Services Section
          {
            component: 'services',
            heading: 'Our Services',
            subheading: 'Comprehensive moving solutions tailored to your needs',
            services: [
              {
                component: 'service_item',
                icon: 'Home',
                title: 'Residential Moving',
                description: 'Expert house and apartment relocation services with care and precision.',
                _uid: 'service_1_' + Date.now()
              },
              {
                component: 'service_item',
                icon: 'Building2',
                title: 'Office Relocation',
                description: 'Minimize downtime with our efficient commercial moving solutions.',
                _uid: 'service_2_' + Date.now()
              },
              {
                component: 'service_item',
                icon: 'Package',
                title: 'Packing Services',
                description: 'Professional packing with quality materials to protect your belongings.',
                _uid: 'service_3_' + Date.now()
              },
              {
                component: 'service_item',
                icon: 'Truck',
                title: 'Furniture Moving',
                description: 'Specialized handling of heavy and delicate furniture items.',
                _uid: 'service_4_' + Date.now()
              },
              {
                component: 'service_item',
                icon: 'Clock',
                title: 'Last Minute Moves',
                description: 'Quick and reliable service for urgent moving requirements.',
                _uid: 'service_5_' + Date.now()
              },
              {
                component: 'service_item',
                icon: 'MapPin',
                title: 'Interstate Moving',
                description: 'Safe and secure long-distance moving across Australia.',
                _uid: 'service_6_' + Date.now()
              }
            ],
            _uid: 'services_' + Date.now()
          },
          // Why Choose Us
          {
            component: 'why_choose_us',
            heading: 'Why Choose Aussie Move Masters?',
            features: [
              {
                component: 'feature_item',
                icon: 'Award',
                title: 'Experienced Team',
                description: 'Over 10 years of professional moving experience in Perth.',
                _uid: 'feature_1_' + Date.now()
              },
              {
                component: 'feature_item',
                icon: 'Shield',
                title: 'Fully Insured',
                description: 'Complete insurance coverage for your peace of mind.',
                _uid: 'feature_2_' + Date.now()
              },
              {
                component: 'feature_item',
                icon: 'Star',
                title: '5-Star Service',
                description: 'Rated highly by hundreds of satisfied Perth customers.',
                _uid: 'feature_3_' + Date.now()
              },
              {
                component: 'feature_item',
                icon: 'DollarSign',
                title: 'Competitive Pricing',
                description: 'Transparent, affordable rates with no hidden fees.',
                _uid: 'feature_4_' + Date.now()
              }
            ],
            _uid: 'why_choose_' + Date.now()
          },
          // How It Works
          {
            component: 'how_it_works',
            heading: 'How It Works',
            subheading: 'Simple, straightforward process from quote to completion',
            steps: [
              {
                component: 'step_item',
                number: '01',
                title: 'Get a Quote',
                description: 'Contact us for a free, no-obligation quote tailored to your needs.',
                _uid: 'step_1_' + Date.now()
              },
              {
                component: 'step_item',
                number: '02',
                title: 'Book Your Move',
                description: 'Choose your preferred date and time. We\'ll confirm your booking.',
                _uid: 'step_2_' + Date.now()
              },
              {
                component: 'step_item',
                number: '03',
                title: 'We Pack & Load',
                description: 'Our professional team arrives on time and handles everything with care.',
                _uid: 'step_3_' + Date.now()
              },
              {
                component: 'step_item',
                number: '04',
                title: 'Relax & Unpack',
                description: 'We deliver to your new location and help you settle in.',
                _uid: 'step_4_' + Date.now()
              }
            ],
            _uid: 'how_it_works_' + Date.now()
          },
          // Pricing
          {
            component: 'pricing',
            heading: 'Affordable Pricing',
            subheading: 'Choose the package that fits your needs and budget',
            packages: [
              {
                component: 'pricing_card',
                truck_size: 'Small Truck',
                capacity: 'Up to 1 bedroom',
                price: '$120/hour',
                features: '2 experienced movers\nSuitable for apartments\nBasic equipment included',
                is_popular: false,
                _uid: 'pricing_1_' + Date.now()
              },
              {
                component: 'pricing_card',
                truck_size: 'Medium Truck',
                capacity: 'Up to 2-3 bedrooms',
                price: '$150/hour',
                features: '2-3 experienced movers\nPerfect for family homes\nAll equipment included\nFree blankets & straps',
                is_popular: true,
                _uid: 'pricing_2_' + Date.now()
              },
              {
                component: 'pricing_card',
                truck_size: 'Large Truck',
                capacity: 'Up to 4+ bedrooms',
                price: '$180/hour',
                features: '3-4 experienced movers\nIdeal for large homes\nPremium equipment\nFull packing service available',
                is_popular: false,
                _uid: 'pricing_3_' + Date.now()
              }
            ],
            _uid: 'pricing_' + Date.now()
          },
          // Testimonials
          {
            component: 'testimonials',
            heading: 'What Our Customers Say',
            items: [
              {
                component: 'testimonial_item',
                name: 'Sarah Johnson',
                rating: 5,
                text: 'Absolutely fantastic service! The team was professional, efficient, and took great care of our belongings. Highly recommend!',
                location: 'Subiaco, Perth',
                _uid: 'testimonial_1_' + Date.now()
              },
              {
                component: 'testimonial_item',
                name: 'Michael Chen',
                rating: 5,
                text: 'Best removalists in Perth! They made our office relocation seamless. Not a single item was damaged.',
                location: 'CBD, Perth',
                _uid: 'testimonial_2_' + Date.now()
              },
              {
                component: 'testimonial_item',
                name: 'Emma Williams',
                rating: 5,
                text: 'Great value for money. The crew was friendly and worked really hard. Would definitely use them again.',
                location: 'Fremantle, Perth',
                _uid: 'testimonial_3_' + Date.now()
              }
            ],
            _uid: 'testimonials_' + Date.now()
          },
          // FAQ
          {
            component: 'faq',
            heading: 'Frequently Asked Questions',
            items: [
              {
                component: 'faq_item',
                question: 'How much do your services cost?',
                answer: 'Our pricing starts from $120/hour for a small truck with 2 movers. Final cost depends on truck size, number of movers, and distance. We provide transparent quotes with no hidden fees.',
                _uid: 'faq_1_' + Date.now()
              },
              {
                component: 'faq_item',
                question: 'Are you insured?',
                answer: 'Yes, we are fully insured. All our moves are covered by comprehensive insurance to protect your belongings.',
                _uid: 'faq_2_' + Date.now()
              },
              {
                component: 'faq_item',
                question: 'Do you provide packing materials?',
                answer: 'Yes, we offer professional packing services and can supply all necessary materials including boxes, bubble wrap, and tape.',
                _uid: 'faq_3_' + Date.now()
              },
              {
                component: 'faq_item',
                question: 'How far in advance should I book?',
                answer: 'We recommend booking at least 1-2 weeks in advance, especially during peak seasons. However, we also handle last-minute moves when possible.',
                _uid: 'faq_4_' + Date.now()
              },
              {
                component: 'faq_item',
                question: 'Do you move interstate?',
                answer: 'Yes, we provide interstate moving services across Australia. Contact us for a custom quote based on your destination.',
                _uid: 'faq_5_' + Date.now()
              }
            ],
            _uid: 'faq_' + Date.now()
          },
          // Contact
          {
            component: 'contact',
            heading: 'Get Your Free Quote Today',
            subheading: 'Fill out the form below or call us directly for an instant quote',
            phone: '0414 910 000',
            email: 'info@aussiemovemasters.com.au',
            _uid: 'contact_' + Date.now()
          }
        ]
      },
      is_startpage: true,
      parent_id: 0
    }
  };
  
  try {
    const result = await apiCall('/stories', 'POST', storyData);
    console.log('✅ Landing page created successfully!');
    console.log(`Story ID: ${result.story.id}`);
    console.log(`\nView it at: https://app.storyblok.com/#!/me/spaces/${SPACE_ID}/stories/0/0/${result.story.id}`);
  } catch (error) {
    console.error('Failed to create story:', error);
  }
}

createStory();
