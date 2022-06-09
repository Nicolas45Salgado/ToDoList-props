import { atom} from 'recoil';

const textAtom = atom({
  key: 'textAtom',
  default: '',
  dangerouslyAllowMutability: false, // In some cases it may be desireable to allow mutating of objects stored in atoms that don't represent state changes. Use this option to override freezing objects in development mode.
})