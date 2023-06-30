import { createFilter } from '@rollup/pluginutils';

export default function removeRootCss(options = {}) {
  const filter = createFilter(options.include, options.exclude);

  return {
    name: 'customPlugin', // this name will show up in warnings and errors
    generateBundle(opts, bundle) {
      for (const fileName in bundle) {
        if (filter(fileName)) {
          const chunk = bundle[fileName];

          if (chunk.type === 'asset' && /css$/.test(fileName)) {

            // Modify css string
            let cssString = chunk.source.toString();
            cssString = cssString.replace(/(:root\s*{)[^}]*}/g, '$1}');
            chunk.source = Buffer.from(cssString);
          }
        }
      }
    }
  };
}