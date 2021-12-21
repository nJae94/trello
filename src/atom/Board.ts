import { atom } from 'recoil';

export interface BoardAtom {
  id: number;
  text: string;
}

interface BoardAtomItem {
  [key: string]: BoardAtom[];
}

export const boardState = atom<BoardAtomItem>({
  key: 'board',
  default: {},
});
