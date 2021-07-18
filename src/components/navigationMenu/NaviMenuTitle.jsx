import styled from 'styled-components';
function NaviMenuTitle({ children }) {
  return <Title>{children}</Title>;
}

export default NaviMenuTitle;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: ${({ theme }) => theme.size.lg}px;
  padding-bottom: 15px;
  cursor: pointer;
`;
