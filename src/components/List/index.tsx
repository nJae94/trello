import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import * as Styles from './styles';

export const TrelloList = () => {
  const onDragEnd = () => {};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="board">
        {(b) => (
          <Styles.BoardWrapper ref={b.innerRef} {...b.droppableProps}>
            <Draggable draggableId="1st" index={0}>
              {(c) => (
                <Styles.Card ref={c.innerRef} {...c.dragHandleProps} {...c.draggableProps}>
                  테스트1
                </Styles.Card>
              )}
            </Draggable>
            {b.placeholder}
          </Styles.BoardWrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
};
