import styled from '@emotion/styled';
import { memo, useCallback } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useSetRecoilState } from 'recoil';
import { BoardAtom, boardState } from '../../atom/Board';

interface CardProps {
  index: number;
  card: BoardAtom;
}

const Card = ({ index, card }: CardProps) => {
  const setBoard = useSetRecoilState(boardState);

  const onClickHandler = useCallback(
    (id: number) => {
      setBoard((prevBoard) => {
        const tempBoard = { ...prevBoard };
        const keyArr = Object.keys(tempBoard);

        keyArr.forEach((key) => {
          tempBoard[key] = prevBoard[key].filter((prevCard) => prevCard.id !== id);
        });

        return tempBoard;
      });
    },
    [setBoard],
  );

  return (
    <li>
      <Draggable draggableId={`${card.id}`} index={index} key={card.id}>
        {(p) => (
          <Wrapper ref={p.innerRef} {...p.dragHandleProps} {...p.draggableProps}>
            <Content>{card.text}</Content>
            <Button onClick={() => onClickHandler(card.id)}>x</Button>
          </Wrapper>
        )}
      </Draggable>
    </li>
  );
};

export default memo(Card);

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  background-color: gray;
  margin-bottom: 1rem;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
`;

const Content = styled.div`
  flex: 1;
`;

const Button = styled.button`
  width: 30px;
  height: 100%;
  background-color: gray;
  border: none;
`;
