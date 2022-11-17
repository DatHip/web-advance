import { lazyLoad } from 'utils/loadable'

export const FooterBasic = lazyLoad(
  () => import('./index'),
  module => module.FooterBasic,
)
