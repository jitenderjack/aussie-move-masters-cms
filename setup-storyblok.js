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

async function createComponent(name, schema) {
  console.log(`Creating component: ${name}...`);
  try {
    const result = await apiCall('/components', 'POST', {
      component: {
        name,
        ...schema
      }
    });
    console.log(`✓ Created: ${name}`);
    return result;
  } catch (error) {
    console.error(`✗ Failed to create ${name}:`, error.message);
  }
}

async function setup() {
  console.log('Setting up Storyblok components for Aussie Move Masters...\n');
  
  // 1. Hero Section
  await createComponent('hero', {
    display_name: 'Hero Section',
    is_root: false,
    is_nestable: true,
    schema: {
      heading: {
        type: 'text',
        required: true,
        description: 'Main heading'
      },
      subheading: {
        type: 'textarea',
        required: true,
        description: 'Subheading text'
      },
      background_image: {
        type: 'asset',
        description: 'Hero background image'
      },
      show_quote_form: {
        type: 'boolean',
        default_value: true
      }
    }
  });
  
  // 2. Service Item
  await createComponent('service_item', {
    display_name: 'Service Item',
    is_root: false,
    is_nestable: true,
    schema: {
      icon: {
        type: 'text',
        description: 'Icon name (e.g., Truck, Package, Clock)'
      },
      title: {
        type: 'text',
        required: true
      },
      description: {
        type: 'textarea',
        required: true
      }
    }
  });
  
  // 3. Services Section
  await createComponent('services', {
    display_name: 'Services Section',
    is_root: false,
    is_nestable: true,
    schema: {
      heading: {
        type: 'text',
        default_value: 'Our Services'
      },
      subheading: {
        type: 'textarea'
      },
      services: {
        type: 'bloks',
        restrict_components: true,
        component_whitelist: ['service_item']
      }
    }
  });
  
  // 4. Feature Item
  await createComponent('feature_item', {
    display_name: 'Feature Item',
    is_root: false,
    is_nestable: true,
    schema: {
      icon: {
        type: 'text',
        description: 'Icon name'
      },
      title: {
        type: 'text',
        required: true
      },
      description: {
        type: 'textarea',
        required: true
      }
    }
  });
  
  // 5. Why Choose Us Section
  await createComponent('why_choose_us', {
    display_name: 'Why Choose Us',
    is_root: false,
    is_nestable: true,
    schema: {
      heading: {
        type: 'text',
        default_value: 'Why Choose Us?'
      },
      features: {
        type: 'bloks',
        restrict_components: true,
        component_whitelist: ['feature_item']
      }
    }
  });
  
  // 6. Step Item
  await createComponent('step_item', {
    display_name: 'Step Item',
    is_root: false,
    is_nestable: true,
    schema: {
      number: {
        type: 'text',
        required: true,
        description: 'Step number (e.g., 01, 02)'
      },
      title: {
        type: 'text',
        required: true
      },
      description: {
        type: 'textarea',
        required: true
      }
    }
  });
  
  // 7. How It Works Section
  await createComponent('how_it_works', {
    display_name: 'How It Works',
    is_root: false,
    is_nestable: true,
    schema: {
      heading: {
        type: 'text',
        default_value: 'How It Works'
      },
      subheading: {
        type: 'textarea'
      },
      steps: {
        type: 'bloks',
        restrict_components: true,
        component_whitelist: ['step_item']
      }
    }
  });
  
  // 8. Pricing Card
  await createComponent('pricing_card', {
    display_name: 'Pricing Card',
    is_root: false,
    is_nestable: true,
    schema: {
      truck_size: {
        type: 'text',
        required: true,
        description: 'e.g., Small Truck, Medium Truck'
      },
      capacity: {
        type: 'text',
        description: 'e.g., Up to 2 bedrooms'
      },
      price: {
        type: 'text',
        required: true,
        description: 'e.g., $150/hour'
      },
      features: {
        type: 'textarea',
        description: 'One feature per line'
      },
      is_popular: {
        type: 'boolean',
        default_value: false
      }
    }
  });
  
  // 9. Pricing Section
  await createComponent('pricing', {
    display_name: 'Pricing Section',
    is_root: false,
    is_nestable: true,
    schema: {
      heading: {
        type: 'text',
        default_value: 'Our Pricing'
      },
      subheading: {
        type: 'textarea'
      },
      packages: {
        type: 'bloks',
        restrict_components: true,
        component_whitelist: ['pricing_card']
      }
    }
  });
  
  // 10. Testimonial Item
  await createComponent('testimonial_item', {
    display_name: 'Testimonial',
    is_root: false,
    is_nestable: true,
    schema: {
      name: {
        type: 'text',
        required: true
      },
      rating: {
        type: 'number',
        required: true,
        default_value: 5,
        description: 'Rating out of 5'
      },
      text: {
        type: 'textarea',
        required: true
      },
      location: {
        type: 'text',
        description: 'e.g., Perth, WA'
      }
    }
  });
  
  // 11. Testimonials Section
  await createComponent('testimonials', {
    display_name: 'Testimonials Section',
    is_root: false,
    is_nestable: true,
    schema: {
      heading: {
        type: 'text',
        default_value: 'What Our Customers Say'
      },
      items: {
        type: 'bloks',
        restrict_components: true,
        component_whitelist: ['testimonial_item']
      }
    }
  });
  
  // 12. FAQ Item
  await createComponent('faq_item', {
    display_name: 'FAQ Item',
    is_root: false,
    is_nestable: true,
    schema: {
      question: {
        type: 'text',
        required: true
      },
      answer: {
        type: 'textarea',
        required: true
      }
    }
  });
  
  // 13. FAQ Section
  await createComponent('faq', {
    display_name: 'FAQ Section',
    is_root: false,
    is_nestable: true,
    schema: {
      heading: {
        type: 'text',
        default_value: 'Frequently Asked Questions'
      },
      items: {
        type: 'bloks',
        restrict_components: true,
        component_whitelist: ['faq_item']
      }
    }
  });
  
  // 14. Contact Section
  await createComponent('contact', {
    display_name: 'Contact Section',
    is_root: false,
    is_nestable: true,
    schema: {
      heading: {
        type: 'text',
        default_value: 'Get a Free Quote'
      },
      subheading: {
        type: 'textarea'
      },
      phone: {
        type: 'text',
        description: 'Contact phone number'
      },
      email: {
        type: 'text',
        description: 'Contact email'
      }
    }
  });
  
  // 15. Landing Page (main content type)
  await createComponent('landing_page', {
    display_name: 'Landing Page',
    is_root: true,
    is_nestable: false,
    schema: {
      sections: {
        type: 'bloks',
        restrict_components: true,
        component_whitelist: [
          'hero',
          'services',
          'why_choose_us',
          'how_it_works',
          'pricing',
          'testimonials',
          'faq',
          'contact'
        ]
      },
      site_title: {
        type: 'text',
        default_value: 'Aussie Move Masters'
      },
      phone_number: {
        type: 'text',
        description: 'Main contact phone'
      }
    }
  });
  
  console.log('\n✅ All components created successfully!');
  console.log('\nNext steps:');
  console.log('1. Go to https://app.storyblok.com');
  console.log('2. Create a new story using the "Landing Page" content type');
  console.log('3. Add sections to build your page');
}

setup().catch(console.error);
