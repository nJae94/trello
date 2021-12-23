import { useCallback, useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import { boardState } from '../../atom/Board';
import Card from '../Card';
import * as Styles from './styles';

interface BoardProps {
  title: string;
  index: number;
}

interface FormData {
  content: string;
}

const Board = ({ title, index }: BoardProps) => {
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
        <Styles.Wrapper ref={b.innerRef} {...b.dragHandleProps} {...b.draggableProps}>
          <Styles.Title>{title}</Styles.Title>
          <Droppable direction="vertical" droppableId={title} type="card">
            {(provider) => (
              <Styles.Content ref={provider.innerRef} {...provider.droppableProps}>
                {board[title].map((item) => {
                  return <Card key={index} board={item} index={index} />;
                })}
                <li>{provider.placeholder}</li>
              </Styles.Content>
            )}
          </Droppable>
          {isOpen ? (
            <Styles.Form onSubmit={handleSubmit(onSubmit)}>
              <textarea placeholder="입력" {...register('content')} />
              <Styles.ButtonWap>
                <button>추가</button>
                <button>취소</button>
              </Styles.ButtonWap>
            </Styles.Form>
          ) : (
            <button onClick={onClickOpen}>글쓰기</button>
          )}
        </Styles.Wrapper>
      )}
    </Draggable>
  );
};

export default Board;
