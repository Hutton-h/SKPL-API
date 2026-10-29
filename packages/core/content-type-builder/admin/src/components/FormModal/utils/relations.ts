/* eslint-disable no-confusing-arrow */

import type { Schema } from '@skpl/types';

const shouldPluralizeName = (nature?: Schema.Attribute.RelationKind.Any) =>
  nature !== undefined && ['manyToMany', 'oneToMany', 'manyWay'].includes(nature) ? 2 : 1;

const shouldPluralizeTargetAttribute = (nature?: Schema.Attribute.RelationKind.Any) =>
  nature !== undefined && ['manyToMany', 'manyToOne'].includes(nature) ? 2 : 1;

export { shouldPluralizeName, shouldPluralizeTargetAttribute };
