import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useRecoilValue } from 'recoil';
import { boardState } from '../../atom/Board';
import * as Styles from './styles';

interface BoardProps {
  title: string;
  index: number;
}

const Board = ({ title, index }: BoardProps) => {
  const board = useRecoilValue(boardState);
  return (
    <Draggable key={title} draggableId={title} index={index}>
      {(b) => (
        <Styles.Wrapper ref={b.innerRef} {...b.dragHandleProps} {...b.draggableProps}>
          <Styles.Title>{title}</Styles.Title>
          <Droppable direction="vertical" droppableId={title} type="card">
            {(provider) => (
              <Styles.Content ref={provider.innerRef} {...provider.droppableProps}>
                {board[title].map((item) => {
                  return <div>{item}</div>;
                })}
              </Styles.Content>
            )}
          </Droppable>
        </Styles.Wrapper>
      )}
    </Draggable>
  );
};

export default Board;
