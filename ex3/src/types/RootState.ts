import { UserState } from 'store/app/user/slice/types'

export interface RootState {
  users?: UserState;
  language?: string;
}
