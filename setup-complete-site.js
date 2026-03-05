const https = require('https');

const SPACE_ID = '290907279142737';
const MANAGEMENT_TOKEN = 'LnoZbr7ZBMGZgiwE4sHR3gtt-150914739856668-APRVumsvtUUy8fAHTQmF';
const API_BASE = `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}`;

function request(method, path, data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'mapi.storyblok.com',
      path: `/v1/spaces/${SPACE_ID}${path}`,
      method,
      headers: {
        'Authorization': MANAGEMENT_TOKEN,
        'Content-Type': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(JSON.parse(body));
        } else {
          reject({ statusCode: res.statusCode, body: JSON.parse(body) });
        }
      });
    });

    req.on('error', reject);
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

async function createStory() {
  const storyData = {
    story: {
      name: 'Home',
      slug: 'home',
      content: {
        component: 'landing_page',
        body: [
          {
            component: 'top_bar',
            phone: '0414 910 000',
            email: 'info@aussiemovemasters.com.au',
            address: 'Kindra Way, Nollamara WA 6061, Australia',
            _uid: 'topbar_001'
          },
          {
            component: 'header',
            logo_text_top: 'AUSSIE',
            logo_text_bottom: 'MOVE MASTERS',
            phone: '0414 910 000',
            nav_items: [
              { label: 'Home', href: 'hero', _uid: 'nav_1' },
              { label: 'Services', href: 'services', _uid: 'nav_2' },
              { label: 'Why Us', href: 'why-us', _uid: 'nav_3' },
              { label: 'Pricing', href: 'pricing', _uid: 'nav_4' },
              { label: 'FAQ', href: 'faq', _uid: 'nav_5' },
              { label: 'Contact', href: 'contact', _uid: 'nav_6' }
            ],
            _uid: 'header_001'
          },
          {
            component: 'hero_with_form',
            heading: 'Moving Made Simple —<br /><span class="text-[hsl(38,92%,64%)]">Let the Masters</span><br />Handle the Heavy Lifting',
            subheading: 'Experienced removalists & packers across Perth. Home, office or interstate — we guarantee a stress-free move at an affordable price.',
            phone: '0414 910 000',
            email: 'info@aussiemovemasters.com.au',
            trust_badges: [
              { icon: 'Shield', label: 'Fully Insured', _uid: 'badge_1' },
              { icon: 'Star', label: '5.0 ★ Google', _uid: 'badge_2' },
              { icon: 'Clock', label: '7 Days a Week', _uid: 'badge_3' },
              { icon: 'CheckCircle', label: 'No Hidden Fees', _uid: 'badge_4' }
            ],
            _uid: 'hero_001'
          },
          {
            component: 'enhanced_services',
            heading: 'Our Moving Services',
            subheading: 'From studio apartments to large offices — we have the right team and truck for every move across Perth.',
            services: [
              {
                icon: 'Home',
                title: 'House Removals',
                description: 'Reliable relocations for units, townhouses, and family homes across all Perth suburbs. We disassemble, wrap, and reassemble with care.',
                badge: 'Most Popular',
                badge_type: 'popular',
                _uid: 'service_1'
              },
              {
                icon: 'Building2',
                title: 'Office Relocation',
                description: 'Minimal downtime, maximum efficiency. We handle desks, IT equipment and files — coordinating building access and lift bookings.',
                badge: 'Business',
                badge_type: 'business',
                _uid: 'service_2'
              },
              {
                icon: 'Package',
                title: 'Packing Services',
                description: 'Let our expert packers wrap every item using quality materials — bubble wrap, heavy-duty blankets, and custom boxes.',
                _uid: 'service_3'
              },
              {
                icon: 'Truck',
                title: 'Furniture Removalists',
                description: 'Specialist furniture movers handling lounges, beds, dining sets, and fragile antiques with professional equipment.',
                _uid: 'service_4'
              },
              {
                icon: 'Clock',
                title: 'Same-Day & Urgent Moves',
                description: 'Plans changed? We offer same-day moves when slots are available. Call early for priority booking.',
                badge: 'Urgent',
                badge_type: 'urgent',
                _uid: 'service_5'
              },
              {
                icon: 'MapPin',
                title: 'Two Men & a Truck',
                description: 'Ideal for studios and small apartments. An affordable, efficient service perfect for students and couples.',
                badge: 'Budget-Friendly',
                badge_type: 'budget',
                _uid: 'service_6'
              }
            ],
            _uid: 'services_001'
          },
          {
            component: 'enhanced_pricing',
            heading: 'Explore Our Pricing Packages',
            subheading: 'Transparent pricing with no hidden fees. Find the perfect truck for your move.',
            tiers: [
              {
                title: 'Studio / 1-Bed',
                subtitle: '3.5 Ton Truck',
                price: '$90/hr',
                features: '🚛 15 m³ capacity\n👥 2 professional movers\n🧰 Trolleys, blankets & straps\n📏 3.5m × 2.1m × 2.1m\n✅ Fully insured',
                badge: 'Budget-friendly',
                _uid: 'tier_1'
              },
              {
                title: '2-Bedroom',
                subtitle: '4.5 Ton Truck',
                price: '$110/hr',
                features: '🚛 20 m³ capacity\n👥 2 professional movers\n🧰 Trolleys, blankets & straps\n📏 4.2m × 2.1m × 2.1m\n✅ Fully insured',
                badge: 'Great for couples',
                _uid: 'tier_2'
              },
              {
                title: '3-Bedroom',
                subtitle: '6.5 Ton Truck',
                price: '$140/hr',
                features: '🚛 30 m³ capacity\n👥 2 professional movers\n🧰 Trolleys, blankets & straps\n📏 5.2m × 2.4m × 2.4m\n✅ Fully insured',
                is_popular: true,
                _uid: 'tier_3'
              },
              {
                title: '4-Bedroom',
                subtitle: '8.5 Ton Truck',
                price: '$165/hr',
                features: '🚛 40 m³ capacity\n👥 2 professional movers\n🧰 Trolleys, blankets & straps\n📏 5.8m × 2.4m × 2.8m\n✅ Fully insured',
                badge: 'Family homes',
                _uid: 'tier_4'
              },
              {
                title: 'Large 4–5 Bed',
                subtitle: '10 Ton Truck',
                price: '$170/hr',
                features: '🚛 50 m³ capacity\n👥 2 professional movers\n🧰 Trolleys, blankets & straps\n📏 7.4m × 2.4m × 2.8m\n✅ Fully insured',
                badge: 'Biggest homes',
                _uid: 'tier_5'
              },
              {
                title: 'Office / Commercial',
                subtitle: 'Custom Quote',
                price: 'POA',
                features: '🚛 Tailored capacity\n👥 2 professional movers\n🧰 Trolleys, blankets & straps\n📏 Call for details\n✅ Fully insured',
                badge: 'Business moves',
                _uid: 'tier_6'
              }
            ],
            _uid: 'pricing_001'
          },
          {
            component: 'faq_section',
            heading: 'Frequently Asked Questions',
            items: [
              {
                question: 'How much do removalists in Perth cost?',
                answer: 'Our pricing starts from $90/hour for studios and goes up to $170/hour for large homes. Custom quotes available for commercial moves.',
                _uid: 'faq_1'
              },
              {
                question: 'What truck size do I need?',
                answer: 'We recommend based on bedrooms: Studios get our 3.5T truck, 2-beds need 4.5T, 3-beds fit in 6.5T, and 4+ bedrooms need 8.5–10T trucks.',
                _uid: 'faq_2'
              },
              {
                question: 'Do you offer same-day or urgent moves?',
                answer: 'Yes! Subject to availability, we can accommodate same-day bookings. Call us early for priority scheduling.',
                _uid: 'faq_3'
              },
              {
                question: 'Are you fully insured?',
                answer: 'Absolutely. We carry Public Liability and Transit Insurance on every move for your complete peace of mind.',
                _uid: 'faq_4'
              },
              {
                question: 'Can you help with office relocations?',
                answer: 'Yes, we specialize in commercial moves. We coordinate building access, lift bookings, and handle IT equipment with care.',
                _uid: 'faq_5'
              }
            ],
            _uid: 'faq_001'
          },
          {
            component: 'contact_section',
            heading: 'Get Your Free Quote Today',
            subheading: 'Fill out the form below or call us directly for an instant quote',
            phone: '0414 910 000',
            email: 'info@aussiemovemasters.com.au',
            _uid: 'contact_001'
          },
          {
            component: 'enhanced_footer',
            phone: '0414 910 000',
            email: 'info@aussiemovemasters.com.au',
            address: 'Kindra Way, Nollamara WA 6061, Australia',
            logo_text_line1: 'AUSSIE',
            logo_text_line2: 'MOVE MASTERS',
            _uid: 'footer_001'
          }
        ]
      }
    }
  };

  try {
    const response = await request('POST', '/stories/', storyData);
    console.log('✅ Story created successfully!');
    console.log('Story ID:', response.story.id);
    
    // Publish the story
    await request('PUT', `/stories/${response.story.id}/publish`);
    console.log('✅ Story published!');
    
  } catch (error) {
    if (error.statusCode === 422 && JSON.stringify(error.body).includes('already taken')) {
      console.log('ℹ️  Story already exists. Updating instead...');
      
      // Get existing story
      const getResponse = await request('GET', '/stories/?with_slug=home');
      
      if (getResponse.stories.length > 0) {
        const storyId = getResponse.stories[0].id;
        
        // Update story
        await request('PUT', `/stories/${storyId}`, storyData);
        console.log('✅ Story updated successfully!');
        
        // Publish
        try {
          await request('PUT', `/stories/${storyId}/publish`);
          console.log('✅ Story published!');
        } catch (pubError) {
          console.log('⚠️  Publish warning (story is updated):', pubError.message || 'Already published');
        }
      }
    } else {
      console.error('❌ Error:', error.body || error.message || error);
      throw error;
    }
  }
}

console.log('🚀 Setting up Aussie Move Masters site in Storyblok...\n');
createStory()
  .then(() => {
    console.log('\n✅ All done! Visit https://aussie-move-masters-cms.vercel.app to see your site!');
    console.log('📝 You can edit content at: https://app.storyblok.com/#!/me/spaces/290907279142737/stories/0/0/home');
  })
  .catch((error) => {
    console.error('\n❌ Setup failed:', error.message);
    process.exit(1);
  });
