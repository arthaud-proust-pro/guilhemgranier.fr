import { background } from '../../fields/background.js';
import { figure } from '../../fields/figure.js';
import { heading } from '../../fields/heading.js';

export const block_figure = {
  name: 'figure',
  label: 'Image',
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{title}}',
  fields: [
    heading, 
    figure, 
    {
      name: 'grid',
      widget: 'hidden',
      default: 'medium',
    },
    {
      name: 'offset',
      widget: 'hidden',
      default: 'center',
    }, 
    background
  ]
};
