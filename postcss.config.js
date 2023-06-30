// postcss.config.js
const postcss = require('postcss');

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // add a custom PostCSS plugin
    postcss.plugin('prefix-selectors', () => {
      return root => {
        root.walkRules(rule => {
          if (
            (rule.parent && rule.parent.type === 'atrule' && rule.parent.name === 'keyframes') ||
            rule.selector.startsWith('[data-theme')
          ) {
            // Skip keyframes rules and selectors that start with '[data-theme'
            return;
          }

          rule.selectors = rule.selectors.map(selector => {
            if (selector.startsWith('html') ) {
              // If selector starts with 'html' or 'body', add id after
              return `#aion-ui`;
            } else if(selector.startsWith('body')){
              return `${selector}.aion-ui`;
            }
            else {
              // Otherwise, add id before
              return `#aion-ui ${selector}`;
            }
          });

        });
      };
    })
  ],
};
