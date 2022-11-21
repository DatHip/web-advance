import { lazyLoad } from 'utils/loadable'

export const ButtonAuth = lazyLoad(
  () => import('./index'),
  module => module.ButtonAuth,
)
