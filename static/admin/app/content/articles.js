import { blocks } from '../blocks/article/blocks.js';
import { description } from '../fields/description.js';
import { draft } from '../fields/draft.js';
import { featured_image } from '../fields/featured-image.js';
import { hero } from '../fields/hero.js';
import { isPage } from '../fields/is-page.js';
import { title } from '../fields/title-required.js';

const pages = {
  name: 'articles',
  folder: 'content/articles',
  label: 'Articles',
  label_singular: 'Articles',

  create: true,
  editor: { preview: false },
  i18n: true,

  slug: '{{slug}}',
  path: '{{slug}}/_index',

  nested: { depth: 5 },
  filter: { field: 'isPage', value: true },
  summary: '{{title}}',

  fields: [
    isPage,
    draft,
    title,
    description,
    featured_image,
    hero,
    blocks
  ]
};

export default pages;
