
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemaTypes';
import { dataset, projectId } from './src/sanity/env';

export default defineConfig({
  name: 'default',
  title: 'Work With Nelly CMS',
  projectId,
  dataset,
  basePath: '/studio',

  plugins: [
    structureTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  form: {
    components: {
      portableText: {
        plugins: (props) => {
          return props.renderDefault({
            ...props,
            plugins: {
              ...props.plugins,
              table: {
                enabled: true,
              },
            },
          });
        },
      },
    },
  },
});
