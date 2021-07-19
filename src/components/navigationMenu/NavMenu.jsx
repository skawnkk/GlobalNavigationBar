import styled from 'styled-components';
import NavMenuTitle from './NavMenuTitle';
import checkLength from '../../util/checkLength';
function NavMenu({ title, contents }) {
  const subMenus = contents.map((content, idx) =>
    idx <= 6 ? <div key={idx}>{checkLength(content.title)}</div> : null
  );

  return (
    <NavMenuBlock>
      <NavMenuTitle>
        <div>{title}</div>
        <div className='icon'>&gt;</div>
      </NavMenuTitle>
      <div className='nav-subMenu'>
        {subMenus}
        <div className='nav-subMenu-more'>
          <div>더보기</div>
          <div className='icon'>&gt;</div>
        </div>
      </div>
    </NavMenuBlock>
  );
}
export default NavMenu;
const NavMenuBlock = styled.div`
  width: 150px;
  padding-right: 20px;
  .nav-subMenu {
    line-height: 2;
    div {
      cursor: pointer;
    }
  }
  .nav-subMenu-more {
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
