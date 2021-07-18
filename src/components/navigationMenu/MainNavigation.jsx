import styled, { keyframes } from 'styled-components';
import NaviMenu from './NaviMenu';
import PortalNavi from '../../util/PortalNavi';
import NaviMenuTitle from './NaviMenuTitle';
import { mokdata } from '../../util/mokdata';
function MainNavigation({ MainNavRef, setNavShown }) {
  const handleNavLeave = ({ relatedTarget }) => {
    if (!relatedTarget) return;
    if (relatedTarget.closest('.navi-background') || relatedTarget.closest('.header')) setNavShown(false);
  };
  const menuContent = mokdata.tags.map((tag, idx) => {
    if (idx >= 5) return null;
    return <NaviMenu key={tag.id} title={tag.title} contents={tag.tags} />;
  });
  const menuGroup = mokdata.tags.map((tag, idx) =>
    idx >= 5 ? (
      <NaviMenuTitle key={tag.id}>
        <div>{tag.title}&nbsp;&nbsp;</div>
        <div className='icon'>&gt;</div>
      </NaviMenuTitle>
    ) : null
  );

  return (
    <PortalNavi>
      <ViewArea className='navi-whole-block' onMouseOut={handleNavLeave}>
        <div className='navi-contents' ref={MainNavRef}>
          {menuContent}
          <div className='navi-contents-group'>{menuGroup}</div>
        </div>
        <div className='navi-background'>배경</div>
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
  .navi-contents {
    animation: 0.5s ${heightUp};
    padding: 30px 15%;
    display: flex;
    justify-content: space-between;
    height: 430px;
  }
  .navi-background {
    height: 100vh;
    background-color: ${({ theme }) => theme.color.BG_black};
    color: ${({ theme }) => theme.color.transparent};
  }
`;
export default MainNavigation;
