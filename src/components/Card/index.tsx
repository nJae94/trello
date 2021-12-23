import styled from '@emotion/styled';
import { Draggable } from 'react-beautiful-dnd';
import { BoardAtom } from '../../atom/Board';

interface CardProps {
  index: number;
  board: BoardAtom;
}

const Card = ({ index, board }: CardProps) => {
  return (
    <li>
      <Draggable draggableId={`${board.id}`} index={index} key={board.id}>
        {(p) => (
          <Wrapper ref={p.innerRef} {...p.dragHandleProps} {...p.draggableProps}>
            <div>{board.text}</div>
          </Wrapper>
        )}
      </Draggable>
    </li>
  );
};

export default Card;

const Wrapper = styled.div`
  width: 100%;
  background-color: gray;
  margin-bottom: 3rem;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
`;
