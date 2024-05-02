import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userData = atom({
  default: {},
  key: 'userDetails',
  effects_UNSTABLE: [persistAtom]
});

export const earnings = atom({
  default: {},
  key: 'earnings',
  effects_UNSTABLE: [persistAtom]
});
