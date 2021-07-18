import styled from 'styled-components';
import Logo from '../common/Logo';
import Navigation from './NavigationBar';
import Options from './Options';
function Header() {
  return (
    <HeaderBlock>
      <Logo />
      <Navigation />
      <Options />
    </HeaderBlock>
  );
}
const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15%;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey};
`;
export default Header;
