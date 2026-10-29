import { createCommand } from 'commander';

import type { StrapiCommand } from '../../types';

/**
 *`$ skpl templates:generate <directory>`
 */
const command: StrapiCommand = () => {
  return createCommand('templates:generate <directory>')
    .description('(deprecated) Generate template from SKPL project')
    .action(() => {
      console.warn('This command is deprecated and will be removed in the next major release.');
      console.warn('You can now copy an existing app and use it as a template.');
    });
};

export { command };
