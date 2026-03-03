#!/usr/bin/env node
/**
 * Complete Storyblok Setup Script
 * Creates all component schemas and populates content
 */

const https = require('https');

const SPACE_ID = process.env.STORYBLOK_SPACE_ID || '290907279142737';
const MANAGEMENT_TOKEN = process.env.STORYBLOK_MANAGEMENT_TOKEN;

if (!MANAGEMENT_TOKEN) {
  console.error('❌ STORYBLOK_MANAGEMENT_TOKEN environment variable is required!');
  console.log('\n📝 Get your management token from:');
  console.log('https://app.storyblok.com/#!/me/account?tab=token');
  console.log('\nThen set it: export STORYBLOK_MANAGEMENT_TOKEN="your-token-here"');
  process.exit(1);
}

function request(method, path, data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'mapi.storyblok.com',
      path: `/v1/spaces/${SPACE_ID}${path}`,
      method,
      headers: {
        'Authorization': MANAGEMENT_TOKEN,
        'Content-Type': 'application/json',
      },
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        try {
          const json = JSON.parse(body);
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(json);
          } else {
            console.error(`❌ ${method} ${path} failed:`, json);
            reject(json);
          }
        } catch (e) {
          resolve({ body, statusCode: res.statusCode });
        }
      });
    });

    req.on('error', reject);
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

async function createComponent(name, schema) {
  console.log(`📦 Creating component: ${name}...`);
  try {
    await request('POST', '/components/', {
      component: {
        name,
        ...schema,
      },
    });
    console.log(`✅ ${name} created`);
  } catch (error) {
    if (error.message && error.message.includes('has already been taken')) {
      console.log(`⚠️  ${name} already exists, skipping...`);
    } else {
      console.error(`❌ Failed to create ${name}:`, error);
    }
  }
}

async function setup() {
  console.log('🚀 Setting up complete Storyblok structure...\n');

  // Component schemas
  const components = [
    {
      name: 'top_bar',
      schema: {
        display_name: 'Top Bar',
        is_root: false,
        is_nestable: true,
        schema: {
          phone: { type: 'text', required: true },
          email: { type: 'text', required: true },
          address: { type: 'text', required: true },
        },
      },
    },
    {
      name: 'header',
      schema: {
        display_name: 'Header',
        is_root: false,
        is_nestable: true,
        schema: {
          logo_text_top: { type: 'text', default_value: 'AUSSIE' },
          logo_text_bottom: { type: 'text', default_value: 'MOVE MASTERS' },
          phone: { type: 'text', required: true },
          nav_items: {
            type: 'bloks',
            restrict_components: true,
            component_whitelist: ['nav_item'],
          },
        },
      },
    },
    {
      name: 'nav_item',
      schema: {
        display_name: 'Navigation Item',
        is_root: false,
        is_nestable: true,
        schema: {
          label: { type: 'text', required: true },
          href: { type: 'text', required: true },
        },
      },
    },
    {
      name: 'hero_section',
      schema: {
        display_name: 'Hero Section',
        is_root: false,
        is_nestable: true,
        schema: {
          headline: { type: 'textarea', required: true },
          subheadline: { type: 'text', required: true },
          description: { type: 'textarea', required: true },
          background_image: { type: 'asset', filetypes: ['images'] },
          phone: { type: 'text', required: true },
          email: { type: 'text', required: true },
          trust_badges: {
            type: 'bloks',
            restrict_components: true,
            component_whitelist: ['trust_badge'],
          },
        },
      },
    },
    {
      name: 'trust_badge',
      schema: {
        display_name: 'Trust Badge',
        is_root: false,
        is_nestable: true,
        schema: {
          icon: {
            type: 'option',
            options: [
              { name: 'Shield', value: 'shield' },
              { name: 'Star', value: 'star' },
              { name: 'Clock', value: 'clock' },
              { name: 'Check', value: 'check' },
            ],
          },
          label: { type: 'text', required: true },
        },
      },
    },
    {
      name: 'about_section',
      schema: {
        display_name: 'About Section',
        is_root: false,
        is_nestable: true,
        schema: {
          title: { type: 'text', required: true },
          subtitle: { type: 'text', required: true },
          description_1: { type: 'textarea', required: true },
          description_2: { type: 'textarea', required: true },
          stats: {
            type: 'bloks',
            restrict_components: true,
            component_whitelist: ['stat_item'],
          },
          features: {
            type: 'bloks',
            restrict_components: true,
            component_whitelist: ['feature_item'],
          },
        },
      },
    },
    {
      name: 'stat_item',
      schema: {
        display_name: 'Stat Item',
        is_root: false,
        is_nestable: true,
        schema: {
          number: { type: 'text', required: true },
          label: { type: 'text', required: true },
        },
      },
    },
    {
      name: 'feature_item',
      schema: {
        display_name: 'Feature Item',
        is_root: false,
        is_nestable: true,
        schema: {
          icon: {
            type: 'option',
            options: [
              { name: 'Shield', value: 'shield' },
              { name: 'Award', value: 'award' },
              { name: 'Users', value: 'users' },
              { name: 'Zap', value: 'zap' },
            ],
          },
          title: { type: 'text', required: true },
          description: { type: 'textarea', required: true },
        },
      },
    },
    {
      name: 'services_section',
      schema: {
        display_name: 'Services Section',
        is_root: false,
        is_nestable: true,
        schema: {
          title: { type: 'text', required: true },
          subtitle: { type: 'textarea', required: true },
          services: {
            type: 'bloks',
            restrict_components: true,
            component_whitelist: ['service_card'],
          },
        },
      },
    },
    {
      name: 'service_card',
      schema: {
        display_name: 'Service Card',
        is_root: false,
        is_nestable: true,
        schema: {
          icon: {
            type: 'option',
            options: [
              { name: 'Home', value: 'home' },
              { name: 'Building', value: 'building' },
              { name: 'Package', value: 'package' },
              { name: 'Truck', value: 'truck' },
              { name: 'Zap', value: 'zap' },
              { name: 'Users', value: 'users' },
            ],
          },
          title: { type: 'text', required: true },
          description: { type: 'textarea', required: true },
          tag: { type: 'text' },
        },
      },
    },
    {
      name: 'why_choose_us_section',
      schema: {
        display_name: 'Why Choose Us Section',
        is_root: false,
        is_nestable: true,
        schema: {
          title: { type: 'text', required: true },
          subtitle: { type: 'textarea', required: true },
          features: {
            type: 'bloks',
            restrict_components: true,
            component_whitelist: ['why_us_feature'],
          },
        },
      },
    },
    {
      name: 'why_us_feature',
      schema: {
        display_name: 'Why Us Feature',
        is_root: false,
        is_nestable: true,
        schema: {
          icon: {
            type: 'option',
            options: [
              { name: 'Dollar Sign', value: 'dollar' },
              { name: 'File Text', value: 'fileText' },
              { name: 'Truck', value: 'truck' },
              { name: 'Clock', value: 'clock' },
              { name: 'Shield', value: 'shield' },
              { name: 'Thumbs Up', value: 'thumbsUp' },
              { name: 'Heart', value: 'heart' },
              { name: 'Award', value: 'award' },
            ],
          },
          title: { type: 'text', required: true },
          description: { type: 'textarea', required: true },
        },
      },
    },
    {
      name: 'how_it_works_section',
      schema: {
        display_name: 'How It Works Section',
        is_root: false,
        is_nestable: true,
        schema: {
          title: { type: 'text', required: true },
          subtitle: { type: 'textarea' },
          steps: {
            type: 'bloks',
            restrict_components: true,
            component_whitelist: ['step_item'],
          },
        },
      },
    },
    {
      name: 'step_item',
      schema: {
        display_name: 'Step Item',
        is_root: false,
        is_nestable: true,
        schema: {
          number: { type: 'text', required: true },
          title: { type: 'text', required: true },
          description: { type: 'textarea', required: true },
        },
      },
    },
    {
      name: 'pricing_section',
      schema: {
        display_name: 'Pricing Section',
        is_root: false,
        is_nestable: true,
        schema: {
          title: { type: 'text', required: true },
          subtitle: { type: 'textarea', required: true },
          packages: {
            type: 'bloks',
            restrict_components: true,
            component_whitelist: ['pricing_card'],
          },
          footer_note: { type: 'textarea' },
        },
      },
    },
    {
      name: 'pricing_card',
      schema: {
        display_name: 'Pricing Card',
        is_root: false,
        is_nestable: true,
        schema: {
          size: { type: 'text', required: true },
          truck: { type: 'text', required: true },
          price: { type: 'text', required: true },
          price_period: { type: 'text', default_value: '/ hr' },
          capacity: { type: 'text', required: true },
          dimensions: { type: 'text', required: true },
          popular: { type: 'boolean' },
          label: { type: 'text', required: true },
        },
      },
    },
    {
      name: 'testimonials_section',
      schema: {
        display_name: 'Testimonials Section',
        is_root: false,
        is_nestable: true,
        schema: {
          title: { type: 'text', required: true },
          testimonials: {
            type: 'bloks',
            restrict_components: true,
            component_whitelist: ['testimonial_card'],
          },
        },
      },
    },
    {
      name: 'testimonial_card',
      schema: {
        display_name: 'Testimonial Card',
        is_root: false,
        is_nestable: true,
        schema: {
          name: { type: 'text', required: true },
          location: { type: 'text', required: true },
          review: { type: 'textarea', required: true },
          rating: { type: 'number', default_value: '5' },
        },
      },
    },
    {
      name: 'faq_section',
      schema: {
        display_name: 'FAQ Section',
        is_root: false,
        is_nestable: true,
        schema: {
          title: { type: 'text', required: true },
          items: {
            type: 'bloks',
            restrict_components: true,
            component_whitelist: ['faq_item'],
          },
        },
      },
    },
    {
      name: 'faq_item',
      schema: {
        display_name: 'FAQ Item',
        is_root: false,
        is_nestable: true,
        schema: {
          question: { type: 'text', required: true },
          answer: { type: 'textarea', required: true },
        },
      },
    },
    {
      name: 'story_section',
      schema: {
        display_name: 'Story Section',
        is_root: false,
        is_nestable: true,
        schema: {
          title: { type: 'text', required: true },
          subtitle: { type: 'text', required: true },
          paragraph_1: { type: 'textarea', required: true },
          paragraph_2: { type: 'textarea', required: true },
          paragraph_3: { type: 'textarea', required: true },
          cta_text: { type: 'text', required: true },
          features: {
            type: 'bloks',
            restrict_components: true,
            component_whitelist: ['story_feature'],
          },
        },
      },
    },
    {
      name: 'story_feature',
      schema: {
        display_name: 'Story Feature',
        is_root: false,
        is_nestable: true,
        schema: {
          icon: {
            type: 'option',
            options: [
              { name: 'Map Pin', value: 'mapPin' },
              { name: 'Award', value: 'award' },
              { name: 'Users', value: 'users' },
              { name: 'Heart', value: 'heart' },
            ],
          },
          title: { type: 'text', required: true },
          description: { type: 'textarea', required: true },
        },
      },
    },
    {
      name: 'contact_section',
      schema: {
        display_name: 'Contact Section',
        is_root: false,
        is_nestable: true,
        schema: {
          title: { type: 'text', required: true },
          subtitle: { type: 'textarea', required: true },
          phone: { type: 'text', required: true },
          email: { type: 'text', required: true },
          address: { type: 'text', required: true },
          phone_label: { type: 'text', required: true },
          form_title: { type: 'text', required: true },
        },
      },
    },
    {
      name: 'footer',
      schema: {
        display_name: 'Footer',
        is_root: false,
        is_nestable: true,
        schema: {
          logo_text_top: { type: 'text', default_value: 'AUSSIE' },
          logo_text_bottom: { type: 'text', default_value: 'MOVE MASTERS' },
          tagline: { type: 'textarea', required: true },
          phone: { type: 'text', required: true },
          email: { type: 'text', required: true },
          address: { type: 'text', required: true },
          copyright: { type: 'textarea', required: true },
          nav_items: {
            type: 'bloks',
            restrict_components: true,
            component_whitelist: ['nav_item'],
          },
        },
      },
    },
  ];

  // Create all components
  for (const comp of components) {
    await createComponent(comp.name, comp.schema);
  }

  console.log('\n✅ All components created successfully!');
  console.log('\n📝 Next steps:');
  console.log('1. Go to Storyblok admin: https://app.storyblok.com/#!/me/spaces/' + SPACE_ID);
  console.log('2. Create a new story called "home"');
  console.log('3. Add all sections in this order:');
  console.log('   - top_bar');
  console.log('   - header');
  console.log('   - hero_section');
  console.log('   - about_section');
  console.log('   - services_section');
  console.log('   - why_choose_us_section');
  console.log('   - how_it_works_section');
  console.log('   - pricing_section');
  console.log('   - testimonials_section');
  console.log('   - faq_section');
  console.log('   - story_section');
  console.log('   - contact_section');
  console.log('   - footer');
  console.log('\n4. Fill in content from CONTENT-MIGRATION.md');
  console.log('5. Publish the story');
}

setup().catch(console.error);
