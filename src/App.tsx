import { RecoilRoot } from 'recoil';
import styled from '@emotion/styled';
import { TrelloList } from './components/List';
import GlobalStyles from './styles/GlobalStyle';
import { mainBg } from './styles/colors';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyles />
      <Wrapper>
        <TrelloList />
      </Wrapper>
    </RecoilRoot>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${mainBg};
`;
