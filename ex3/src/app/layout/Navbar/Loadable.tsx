import { lazyLoad } from 'utils/loadable'

export const NavbarLeft = lazyLoad(
  () => import('./index'),
  module => module.NavbarLeft,
)
