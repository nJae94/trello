import { useForm } from 'react-hook-form';
import { BasicButton } from '../common/Button';
import * as Styles from './styles';

interface FormMoel {
  title: string;
}

const AddBoard = () => {
  const { register, handleSubmit } = useForm<FormMoel>();
  const onSubmit = () => {};

  return (
    <Styles.Wrapper>
      <Styles.Label htmlFor="head">칸반보드 추가</Styles.Label>
      <Styles.Form onSubmit={handleSubmit(onSubmit)}>
        <Styles.Input id="title" type="text" placeholder="보드의 이름을 써주세요" {...register('title')} />
        <BasicButton type="submit">추가</BasicButton>
      </Styles.Form>
    </Styles.Wrapper>
  );
};

export default AddBoard;
