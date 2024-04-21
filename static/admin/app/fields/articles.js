
export const articles = {
  name: 'items',
  label: 'Articles',
  widget: 'relation',
  collection: 'articles',
  multiple: true,
  search_fields: ['title'],
  value_field: '{{title}}',
  display_fields: ['title'],
  required: false
};
