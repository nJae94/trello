import { useEffect } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import { addBoard, boardState } from '../../atom/Board';
import Board from '../Board';
import Trash from '../Trash';
import * as Styles from './styles';

export const TrelloList = () => {
  const [board, setBoard] = useRecoilState(boardState);

  const onDragEnd = (result: DropResult) => {
    const { source, destination, type, draggableId } = result;

    if (!destination || !source) {
      return;
    }

    if (destination.droppableId === 'trash') {
      setBoard((prev) => {
        const newBoard = { ...prev };
        delete newBoard[draggableId];

        return newBoard;
      });
      return;
    }
    if (type === 'board') {
      setBoard((prev) => {
        const newBoard = Object.entries(prev);

        const [temp] = newBoard.splice(source.index, 1);
        newBoard.splice(destination.index, 0, temp);

        return newBoard.reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key]: value,
          }),
          {},
        );
      });
      return;
    }
    if (type === 'card') {
      if (source.droppableId === destination.droppableId) {
        const newBoard = [...board[source.droppableId]];
        const [temp] = newBoard.splice(source.index, 1);
        newBoard.splice(destination.index, 0, temp);

        setBoard((prev) => ({ ...prev, [source.droppableId]: newBoard }));

        return;
      }
      const start = [...board[source.droppableId]];
      const end = [...board[destination.droppableId]];
      const [temp] = start.splice(source.index, 1);
      end.splice(destination.index, 0, temp);

      setBoard((prev) => ({
        ...prev,
        [source.droppableId]: start,
        [destination.droppableId]: end,
      }));
    }
  };

  useEffect(() => {
    addBoard(board);
  }, [board]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="board">
        {(b, snapshot) => (
          <Styles.BoardWrapper ref={b.innerRef} {...b.droppableProps}>
            {Object.keys(board).map((item, index) => {
              return <Board title={item} index={index} key={index} isDragging={snapshot.isDraggingOver} />;
            })}
            {b.placeholder}
          </Styles.BoardWrapper>
        )}
      </Droppable>
      <Trash />
    </DragDropContext>
  );
};
