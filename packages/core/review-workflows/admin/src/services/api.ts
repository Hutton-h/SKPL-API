import { adminApi } from '@skpl/admin/strapi-admin';

const reviewWorkflowsApi = adminApi.enhanceEndpoints({
  addTagTypes: ['ReviewWorkflow', 'ReviewWorkflowStages', 'Document', 'ContentTypeSettings'],
});

export { reviewWorkflowsApi };
