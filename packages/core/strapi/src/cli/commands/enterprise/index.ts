import { createCommand } from 'commander';

import type { StrapiCommand } from '../../types';
import { runAction } from '../../utils/helpers';
import { action as install } from './install/action';

/**
 * `$ skpl enterprise`
 */
const command: StrapiCommand = ({ ctx }) => {
  const enterprise = createCommand('enterprise').description(
    'Manage SKPL Enterprise plugins for your SKPL application'
  );

  // `$ skpl enterprise install [packages...]`
  enterprise
    .command('install [packages...]')
    .description(
      'Install or upgrade SKPL Enterprise plugins. Without package names, choose them from a list.'
    )
    .action(runAction('enterprise:install', (packages: string[] = []) => install(packages, ctx)));

  return enterprise;
};

export { command };
