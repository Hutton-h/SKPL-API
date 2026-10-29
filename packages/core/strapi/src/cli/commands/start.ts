import { createCommand } from 'commander';
import fs from 'fs';
import path from 'path';
import { createStrapi } from '@skpl/core';

import type { StrapiCommand } from '../types';
import { runAction } from '../utils/helpers';
import { tryQuickOutDir } from '../utils/try-quick-outdir';

const action = async () => {
  const appDir = process.cwd();
  const tsconfigPath = path.join(appDir, 'tsconfig.json');

  let distDir: string;

  if (!fs.existsSync(tsconfigPath)) {
    distDir = appDir;
  } else {
    const quickOutDir = tryQuickOutDir(appDir, tsconfigPath);

    if (quickOutDir && fs.existsSync(path.join(quickOutDir, 'src', 'index.js'))) {
      // Built output at configured outDir — skip loading `@skpl/typescript-utils`
      distDir = quickOutDir;
    } else {
      // Custom/extended tsconfig or unbuilt project — fall back to the slow correct path
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const tsUtils = require('@skpl/typescript-utils');
      const outDir = await tsUtils.resolveOutDir(appDir);

      if (!fs.existsSync(outDir)) {
        throw new Error(
          `${outDir} directory not found. Please run the build command before starting your application`
        );
      }

      distDir = outDir;
    }
  }

  createStrapi({ appDir, distDir }).start();
};

/**
 * `$ skpl start`
 */
const command: StrapiCommand = () => {
  return createCommand('start')
    .description('Start your SKPL application')
    .action(runAction('start', action));
};

export { command };
