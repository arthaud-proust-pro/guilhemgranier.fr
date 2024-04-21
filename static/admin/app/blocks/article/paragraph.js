import { background } from '../../fields/background.js';
import { cta } from '../../fields/cta.js';
import { notes } from '../../fields/notes.js';
import { text_markdown } from '../../fields/text-markdown.js';
import { title } from '../../fields/title.js';
import { t } from '../../i18n/translater.js';

export const block_paragraph = {
  name: 'paragraph',
  label: t.blocks.paragraph,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{title}}',
  fields: [
    title,
    text_markdown,
    notes,
    {
      name: 'grid',
      widget: 'hidden',
      default: 'small',
    },
    {
      name: 'offset',
      widget: 'hidden',
      default: 'center',
    },
    {
      name: 'align',
      widget: 'hidden',
      default: 'left',
    },
    cta,
    background
  ]
};
