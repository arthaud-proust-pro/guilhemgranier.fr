import { blocks } from '../blocks/blocks.js';
import { description } from '../fields/description.js';
import { draft } from '../fields/draft.js';
import { hero } from '../fields/hero.js';
import { isIndex } from '../fields/is-index.js';
import { isPage } from '../fields/is-page.js';
import { title } from '../fields/title-required.js';

const pages = {
  name: 'pages',
  label: 'Pages',

  i18n: true,

  files: [
    {
      label: 'Accueil',
      name: 'home',
      file: 'content/_index.md',
      editor: { preview: false },
      i18n: true,
      fields: [
        isIndex, 
        title, 
        description, 
        hero, 
        blocks
      ]
    },
    {
      label: 'À propos',
      name: 'about',
      file: 'content/a-propos/_index.md',
      editor: { preview: false },
      i18n: true,
      fields: [
        isPage,
        draft,
        title,
        description,
        hero,
        blocks
      ]
    }
  ]
  
};

export default pages;
