import { block_figure } from '../../blocks/article/figure.js';
import { block_paragraph } from '../../blocks/article/paragraph.js';
import { block_gallery } from '../../blocks/gallery.js';

import { t } from '../../i18n/translater.js';

export const blocks = {
  name: 'blocks',
  label: t.blocks.blocks.label,
  label_singular: t.blocks.blocks.label_singular,
  widget: 'list',
  collapsed: false,
  types: [
    block_paragraph,
    block_figure,
    block_gallery,
  ],
  i18n: true
};
