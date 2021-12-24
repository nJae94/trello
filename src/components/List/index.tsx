import { useEffect } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import { addBoard, boardState } from '../../atom/Board';
import Board from '../Board';
import * as Styles from './styles';

export const TrelloList = () => {
  const [board, setBoard] = useRecoilState(boardState);

  const onDragEnd = (result: DropResult) => {
    const { source, destination, type } = result;

    if (!destination || !source) {
      return;
    }

    if (type === 'board') {
      setBoard((prev) => {
        const newBoard = Object.entries(prev);
        console.log(newBoard);

        return prev;
      });
    }
  };

  useEffect(() => {
    addBoard(board);
  }, [board]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="board">
        {(b) => (
          <Styles.BoardWrapper ref={b.innerRef} {...b.droppableProps}>
            {Object.keys(board).map((item, index) => {
              return <Board title={item} index={index} key={index} />;
            })}
            {b.placeholder}
          </Styles.BoardWrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
};
