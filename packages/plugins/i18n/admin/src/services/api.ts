import { adminApi } from '@skpl/admin/strapi-admin';

const i18nApi = adminApi.enhanceEndpoints({
  addTagTypes: ['Locale', 'KeyStatistics', 'Settings', 'AILocalizationJobs'],
});

export { i18nApi };
