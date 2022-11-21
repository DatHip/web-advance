import { lazyLoad } from 'utils/loadable'

export const HeaderNav = lazyLoad(
  () => import('./index'),
  module => module.HeaderNav,
)
