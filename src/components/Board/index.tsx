import { memo, useCallback, useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import { boardState } from '../../atom/Board';
import Card from '../Card';
import * as Styles from './styles';

interface BoardProps {
  title: string;
  index: number;
  isDragging: boolean;
}

interface FormData {
  content: string;
}

const Board = ({ title, index, isDragging }: BoardProps) => {
  const [board, setBoard] = useRecoilState(boardState);
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, setValue } = useForm<FormData>();

  const onClickOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const onSubmit = useCallback(
    (data: FormData) => {
      const { content } = data;

      if (content.length === 0) {
        return;
      }

      const contentArr = [...board[title]];
      const id = Date.now();

      contentArr.push({ id, text: content });

      setBoard((prev) => ({ ...prev, [title]: contentArr }));
      setValue('content', '');
    },
    [board, setBoard, setValue, title],
  );
  return (
    <Draggable key={title} draggableId={title} index={index}>
      {(b) => (
        <Styles.Wrapper ref={b.innerRef} {...b.dragHandleProps} {...b.draggableProps} isDragging={isDragging}>
          <Styles.Title>{title}</Styles.Title>
          <Droppable direction="vertical" droppableId={title} type="card">
            {(provider, snapshot) => (
              <Styles.Content ref={provider.innerRef} {...provider.droppableProps} isDragging={snapshot.isDraggingOver}>
                {board[title].map((item, i) => {
                  return <Card key={i} card={item} index={i} />;
                })}
                <li>{provider.placeholder}</li>
              </Styles.Content>
            )}
          </Droppable>
          {isOpen ? (
            <Styles.Form onSubmit={handleSubmit(onSubmit)}>
              <Styles.TextArea placeholder="입력" {...register('content')} />
              <Styles.ButtonWap>
                <Styles.Button>추가</Styles.Button>
                <Styles.CancleButton onClick={onClickOpen}>취소</Styles.CancleButton>
              </Styles.ButtonWap>
            </Styles.Form>
          ) : (
            <Styles.ButtonWap>
              <Styles.Button onClick={onClickOpen}>글쓰기</Styles.Button>
            </Styles.ButtonWap>
          )}
        </Styles.Wrapper>
      )}
    </Draggable>
  );
};

export default memo(Board);
