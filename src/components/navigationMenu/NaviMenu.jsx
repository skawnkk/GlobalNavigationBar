import styled from 'styled-components';
import NaviMenuTitle from './NaviMenuTitle';
function NaviMenu({ title, contents }) {
  const subMenus = contents.map((content, idx) => (idx <= 6 ? <div key={idx}>{content.title}</div> : null));

  return (
    <NaviMenuBlock>
      <NaviMenuTitle>
        <div>{title}</div>
        <div className='icon'>&gt;</div>
      </NaviMenuTitle>
      <div className='navi-subMenu'>
        {subMenus}
        <div className='navi-subMenu-more'>
          <div>더보기</div>
          <div className='icon'>&gt;</div>
        </div>
      </div>
    </NaviMenuBlock>
  );
}
export default NaviMenu;
const NaviMenuBlock = styled.div`
  width: 180px;
  .navi-subMenu {
    line-height: 2;
    div {
      cursor: pointer;
    }
  }
  .navi-subMenu-more {
    display: flex;
    justify-content: space-between;
    align-content: center;
    .icon {
      text-align: end;
      font-weight: bold;
      font-size: ${({ theme }) => theme.size.lg}px;
    }
  }
`;
