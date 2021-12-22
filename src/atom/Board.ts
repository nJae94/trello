import { atom } from 'recoil';
import { LocalStorage } from '../utils/LocalStorage';

export interface BoardAtom {
  id: number;
  text: string;
}

interface BoardAtomItem {
  [key: string]: BoardAtom[];
}

export const addBoard = (board: BoardAtomItem) => {
  LocalStorage.setValue('board', JSON.stringify(board));
};

export const init = () => {
  const prev = LocalStorage.getValue('board');

  if (prev) {
    return JSON.parse(prev);
  }

  return null;
};

export const boardState = atom<BoardAtomItem>({
  key: 'board',
  default: init() ?? ({} as BoardAtomItem),
});
