import { lazyLoad } from 'utils/loadable'

export const SelectLanguage = lazyLoad(
  () => import('./index'),
  module => module.SelectLanguage,
)
