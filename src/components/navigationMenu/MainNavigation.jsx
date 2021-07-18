import styled, { keyframes } from 'styled-components';
import NaviMenu from './NaviMenu';
import PortalNavi from '../../util/PortalNavi';
import NaviMenuTitle from './NaviMenuTitle';
import { mokdata } from '../../util/mokdata';
function MainNavigation({ MainNavRef, isNavShown, setNavShown }) {
  const handleNavLeave = () => setNavShown(false);
  const menuContent = mokdata.tags.map((tag, idx) => {
    if (idx >= 5) return;
    return <NaviMenu key={tag.id} title={tag.title} contents={tag.tags} />;
  });
  const menuGroup = mokdata.tags.map((tag, idx) => {
    if (idx >= 5)
      return (
        <NaviMenuTitle>
          <div key={tag.id}>{tag.title}&nbsp;&nbsp;</div>
          <div className='icon'>&gt;</div>
        </NaviMenuTitle>
      );
  });

  return (
    <PortalNavi>
      <ViewArea>
        <div className='navi-whole-block' isNavShown={isNavShown}>
          <div className='navi-contents' ref={MainNavRef} onMouseLeave={handleNavLeave}>
            {menuContent}
            <div className='navi-contents-group'>{menuGroup}</div>
          </div>
        </div>
      </ViewArea>
    </PortalNavi>
  );
}
const heightUp = keyframes`
  from{
    color: ${({ theme }) => theme.color.transparent};
    height: 0px
  }to{
    color: ${({ theme }) => theme.color.black};
    height: 430px;
  }`;
const ViewArea = styled.div`
  background-color: ${({ theme }) => theme.color.BG_black};
  height: 100vh;
  .navi-contents {
    animation: 0.5s ${heightUp};
    background-color: aliceblue;
    padding: 30px 15%;
    display: flex;
    justify-content: space-between;
    height: 430px;
  }
`;
export default MainNavigation;
