import { z, validateZodSchema } from '@skpl/utils';

const historyRestoreVersionSchema = z.object({
  contentType: z.string().trim(),
});

export const validateRestoreVersion = validateZodSchema(historyRestoreVersionSchema);
