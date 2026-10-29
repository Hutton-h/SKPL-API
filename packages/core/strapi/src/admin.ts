import { RenderAdminArgs, renderAdmin } from '@skpl/admin/strapi-admin';
import contentTypeBuilder from '@skpl/content-type-builder/strapi-admin';
import contentManager from '@skpl/content-manager/strapi-admin';
import email from '@skpl/email/strapi-admin';
import upload from '@skpl/upload/strapi-admin';
import i18n from '@skpl/i18n/strapi-admin';
import contentReleases from '@skpl/content-releases/strapi-admin';
import reviewWorkflows from '@skpl/review-workflows/strapi-admin';

const render = (mountNode: HTMLElement | null, { plugins, ...restArgs }: RenderAdminArgs) => {
  return renderAdmin(mountNode, {
    ...restArgs,
    plugins: {
      'content-manager': contentManager,
      'content-type-builder': contentTypeBuilder,
      email,
      upload,
      contentReleases,
      i18n,
      reviewWorkflows,
      ...plugins,
    },
  });
};

export { render as renderAdmin };
export type { RenderAdminArgs };

export * from '@skpl/admin/strapi-admin';

export {
  unstable_useDocumentLayout,
  unstable_useDocumentActions,
  unstable_useDocument,
  unstable_useContentManagerContext,
  useDocumentRBAC,
} from '@skpl/content-manager/strapi-admin';

export {
  private_useAutoReloadOverlayBlocker,
  private_AutoReloadOverlayBlockerProvider,
} from '@skpl/content-type-builder/strapi-admin';
