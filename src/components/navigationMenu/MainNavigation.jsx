import styled, { keyframes } from 'styled-components';
import NavMenu from './NavMenu';
import PortalNav from '../../util/PortalNav';
import NavMenuTitle from './NavMenuTitle';
import { mokdata } from '../../util/mokdata';
function MainNavigation({ MainNavRef, setNavShown }) {
  const handleNavLeave = ({ relatedTarget }) => {
    if (!relatedTarget) return;
    if (relatedTarget.closest('.nav-background') || relatedTarget.closest('.header')) setNavShown(false);
  };
  const menuContent = mokdata.tags.map((tag, idx) => {
    if (idx >= 5) return null;
    return <NavMenu key={tag.id} title={tag.title} contents={tag.tags} />;
  });
  const menuGroup = mokdata.tags.map((tag, idx) =>
    idx >= 5 ? (
      <NavMenuTitle key={tag.id}>
        <div>{tag.title}&nbsp;&nbsp;</div>
        <div className='icon'>&gt;</div>
      </NavMenuTitle>
    ) : null
  );

  return (
    <PortalNav>
      <ViewArea className='nav-whole-block' onMouseOut={handleNavLeave}>
        <div className='nav-contents' ref={MainNavRef}>
          {menuContent}
          <div className='nav-contents-group'>{menuGroup}</div>
        </div>
        <div className='nav-background'>배경</div>
      </ViewArea>
    </PortalNav>
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
  .nav-contents {
    animation: 0.5s ${heightUp};
    padding: 30px 15%;
    display: flex;
    justify-content: space-between;
    height: 430px;
  }
  .nav-background {
    height: 100vh;
    background-color: ${({ theme }) => theme.color.BG_black};
    color: ${({ theme }) => theme.color.transparent};
  }
`;
export default MainNavigation;
