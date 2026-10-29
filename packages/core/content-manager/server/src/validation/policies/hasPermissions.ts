import { z, validateZodSchema } from '@skpl/utils';

const hasPermissionsSchema = z.object({
  actions: z.array(z.string()).optional(),
  hasAtLeastOne: z.boolean().optional(),
});

export const validateHasPermissionsInput = validateZodSchema(hasPermissionsSchema);
