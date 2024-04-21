import { articles } from '../fields/articles.js';
import { background } from '../fields/background.js';
import { heading } from '../fields/heading.js';
import { show_more } from '../fields/show-more.js';

export const block_selectedarticles = {
  name: 'selected-articles',
  label: 'Sélection d\'articles',
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
    heading,
    { name: 'section', default: 'pages', widget: 'hidden' },
    articles,
    show_more,
    background
  ]
};
