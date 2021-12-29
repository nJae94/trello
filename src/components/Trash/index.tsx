import styled from '@emotion/styled';
import { Droppable } from 'react-beautiful-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Trash = () => {
  return (
    <Wrapper>
      <Droppable droppableId="trash" type="board">
        {(p) => (
          <TrashSection ref={p.innerRef} {...p.droppableProps}>
            <FontAwesomeIcon icon={faTrashAlt} size={'2x'} />
          </TrashSection>
        )}
      </Droppable>
    </Wrapper>
  );
};

export default Trash;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
`;

const TrashSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
