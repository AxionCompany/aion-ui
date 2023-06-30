import { createFilter } from '@rollup/pluginutils';
import postcss from 'postcss';

export default function prefixCss(options = {}) {
  const filter = createFilter(options.include, options.exclude);

  return {
    name: 'prefixCss',
    async generateBundle(opts, bundle) {
      for (const fileName in bundle) {
        if (filter(fileName)) {
          const chunk = bundle[fileName];

          if (chunk.type === 'asset' && /css$/.test(fileName)) {
            // Parse CSS using PostCSS
            let cssString = chunk.source.toString();
            const root = postcss.parse(cssString);

            // Walk through every rule (selector)
            root.walkRules(rule => {
                if (rule.parent && rule.parent.type === 'atrule' && rule.parent.name === 'keyframes') {
                  // Skip keyframes rules
                  return;
                }
                rule.selectors = rule.selectors.map(selector => {
                    // Skip selectors that start with '[data-theme'
                    if (selector.startsWith('[data-theme')) {
                      return selector;
                    }
                    
                    return `#aion-ui ${selector}`;
                  });
              });

            // Convert AST back to CSS string
            cssString = root.toString();
            chunk.source = Buffer.from(cssString);
          }
        }
      }
    }
  };
}
