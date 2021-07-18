import styled from 'styled-components';
import { ReactComponent as Search } from '../../assets/search.svg';
import { ReactComponent as Bell } from '../../assets/bell.svg';
import Profile from './Profile';
function Options() {
  return (
    <OptionsBlock>
      <div className='options-users'>
        <Search />
        <Bell />
        <Profile />
      </div>
      <div className='options-seperator'>구분자</div>
      <div className='options-business'>기업 서비스</div>
    </OptionsBlock>
  );
}
const OptionsBlock = styled.div`
  display: flex;
  align-items: center;
  .options-users {
    display: flex;
    align-items: center;
    svg,
    div {
      margin-right: 20px;
    }
  }
  .options-seperator {
    color: ${({ theme }) => theme.color.transparent};
    border-left: 1px solid ${({ theme }) => theme.color.grey};
    height: 20px;
  }
  .options-business {
    width: 120px;
    align-self: center;
    padding: 5px 10px;
    border: 1px solid ${({ theme }) => theme.color.grey};
    border-radius: 20px;
  }
`;
export default Options;
