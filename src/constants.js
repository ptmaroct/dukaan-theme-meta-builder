// input, textarea, image upload, button
// button meta -> cta text, onclick

export const FIELD_TYPES = {
  TEXT: 'text',
  TEXTAREA: 'textarea',
  BUTTON: 'button',
  IMAGE: 'image',
  PRODUCTS: 'products',
  CATEGORIES: 'categories',
  CATEGORIES_PICKER: 'categories_picker',
  PRODUCTS_PICKER: 'products_picker',
};

export const FIELD_TYPES_DATA = {
  [FIELD_TYPES.TEXT]: {
    label: 'Text',
    properties: [
      { type: 'text', key: 'placeholder', label: 'Placeholder' },
      { type: 'text', key: 'defaultValue', label: 'Default value' },
    ],
    metaProperties: [
      {
        type: 'number',
        label: 'Max Length',
        key: 'maxLength',
        defaultValue: 400,
      },
    ],
  },
  [FIELD_TYPES.TEXTAREA]: {
    label: 'Textarea',
    properties: [
      { type: 'text', key: 'placeholder', label: 'Placeholder' },
      { type: 'text', key: 'defaultValue', label: 'Default value' },
    ],
    metaProperties: [
      {
        type: 'number',
        key: 'numRows',
        label: 'Number of rows',
        defaultValue: 2,
      },
      {
        type: 'number',
        key: 'maxLength',
        label: 'Max Length',
        defaultValue: 400,
      },
    ],
  },
  [FIELD_TYPES.BUTTON]: {
    label: 'Button',
    properties: [
      { type: 'text', key: 'ctaText', label: 'CTA Text' },
      { type: 'text', key: 'link', label: 'Link' },
    ],
    metaProperties: [],
  },
  [FIELD_TYPES.IMAGE]: {
    label: 'Image',
    properties: [],
    metaProperties: [],
  },
  [FIELD_TYPES.PRODUCTS]: {
    label: 'Products',
    properties: [],
    metaProperties: [],
  },
  [FIELD_TYPES.CATEGORIES]: {
    label: 'Categories',
    properties: [],
    metaProperties: [],
  },
  [FIELD_TYPES.PRODUCTS_PICKER]: {
    label: 'Products Picker',
    properties: [],
    metaProperties: [],
  },
  [FIELD_TYPES.CATEGORIES_PICKER]: {
    label: 'Categories Picker',
    properties: [],
    metaProperties: [],
  },
};

export const DUMMY_GROUPS_DATA = [
  {
    title: 'Demo header seaction',
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
];
