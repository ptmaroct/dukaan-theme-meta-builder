// input, textarea, image upload, button
// button meta -> cta text, onclick

export const FIELD_TYPES = [
  {
    type: 'text',
    label: 'Text',
    properties: [
      { type: 'text', key: 'placeholder', label: 'Placeholder' },
      { type: 'text', key: 'defaultValue', label: 'Default value' },
    ],
    metaProperties: [
      {
        type: 'number',
        key: 'maxLength',
        defaultValue: 400,
      },
    ],
  },
  {
    type: 'textarea',
    label: 'Textarea',
    properties: [
      { type: 'text', key: 'placeholder', label: 'Placeholder' },
      { type: 'text', key: 'defaultValue', label: 'Default value' },
    ],
    metaProperties: [
      {
        type: 'number',
        key: 'numRows',
        defaultValue: 2,
      },
      {
        type: 'number',
        key: 'maxLength',
        defaultValue: 400,
      },
    ],
  },
  {
    type: 'button',
    label: 'Button',
    properties: [
      { type: 'text', key: 'ctaText', label: 'CTA Text' },
      { type: 'text', key: 'link', label: 'Link' },
    ],
    metaProperties: [],
  },
];

export const DUMMY_GROUPS_DATA = [
  {
    title: 'Header UI',
    key: 'header-ui',
    sections: [
      {
        title: 'Custom CSS',
        description: 'Add custom CSS to your e-commerce store.',
        activationSupported: true, // if activation is supported, section will show additional form as a collapsible
        fields: [
          {
            key: 'css-text',
            type: 'textarea',
            label: 'Enter your custom CSS',
            placeholder: 'Some placeholders',
            value: null,
            defaultValue: '',
            meta: {
              numRows: 2, // meta will be depending field type, for example textarea can have numRows as meta
              maxLength: 400, // some meta properties will be common like content length for textarea and textinput
            },
          },
          {
            key: 'featured-product-link',
            type: 'text',
            label: 'Enter your featured product link',
            placeholder: 'https://wowtrends.ninja/product',
            value: null,
            defaultValue: 'https://wowtrends.ninja/product',
            meta: {
              maxLength: 400,
            },
          },
        ],
      },
      {
        title: 'Testimonials',
        description: 'Add testimonials to your store',
        activationSupported: true,
        fields: [
          {
            key: 'test-text1', // for complex components which have grouped input - like testimonial user name and user message, input has to be flattened
            type: 'textarea',
            label: 'Testimonial 1 Text',
            placeholder: 'Some placeholders',
            value: null,
            default_value: '',
            meta: {
              numRows: 2,
              maxLength: 400,
            },
          },
          {
            key: 'test-image1',
            type: 'image',
            label: 'Testimonial 1 image',
            placeholder: 'Some placeholders',
            value: 'hello',
            default_value: '',
            meta: {
              maxLength: 25,
            },
          },
        ],
      },
    ],
  },
  { title: 'Hero', key: 'hero-ui', sections: [] },
  { title: 'Footer', key: 'footer-ui', sections: [] },
];
