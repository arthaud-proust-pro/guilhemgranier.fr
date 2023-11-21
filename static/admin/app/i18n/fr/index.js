import { overrideTranslations } from "../overrider.js";
import { content as baseContent } from './content.js';
export * from './blocks.js';
export * from './config.js';
export * from './fields.js';
export * from './shortcodes.js';

export const content = overrideTranslations(baseContent, {
    services: {
        label: "Formules",
        label_singular: "Formule",
        description: "Tous les formules",
    },
})