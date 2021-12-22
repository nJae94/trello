import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import { boardState } from '../../atom/Board';
import Board from '../Board';
import * as Styles from './styles';

export const TrelloList = () => {
  const [board, setBoard] = useRecoilState(boardState);
  console.log(board);
  const onDragEnd = () => {
    setBoard({});
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="board">
        {(b) => (
          <Styles.BoardWrapper ref={b.innerRef} {...b.droppableProps}>
            {Object.keys(board).map((item, index) => {
              return <Board title={item} index={index} />;
            })}
            {b.placeholder}
          </Styles.BoardWrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
};
