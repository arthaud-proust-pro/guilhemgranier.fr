import hugolifyConfig from './config.js';

import articles from './content/articles.js';
import pages from './content/pages.js';
import config from './data/config.js';
import availableCollections from './settings/available-collections.js';

hugolifyConfig.collections = [pages, articles, ...availableCollections, config];
window.initCMS({ config: hugolifyConfig });
