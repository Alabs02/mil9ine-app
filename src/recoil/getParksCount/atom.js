import { atom } from "recoil";
import persistAtom from '../persistRecoil';

const getParksCountAtom = atom({
  key: 'getParksCountAtom',
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export default getParksCountAtom;