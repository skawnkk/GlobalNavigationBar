import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { MediaBasicScreen, MediaSmallScreen } from '../../util/mediaquery';
import HeaderMenu from './HeaderMenu';
import MainNavigation from '../navigationMenu/MainNavigation';
function Navigation() {
  const MainNavRef = useRef(null);
  const [isNavShown, setNavShown] = useState(false);
  const menuList = ['탐색', '커리어 성장', '직군별 연봉', '이력서', '매치업', '프리랜서', 'Ai합격예측'];
  const menus = menuList.map((menu, idx) => (
    <HeaderMenu key={idx} setNavShown={setNavShown} MainNavRef={MainNavRef}>
      {menu}
    </HeaderMenu>
  ));
  const smallMenus = menuList.map((menu, idx) => {
    if (idx > 1) return;
    return (
      <HeaderMenu key={idx} setNavShown={setNavShown} MainNavRef={MainNavRef}>
        {menu}
      </HeaderMenu>
    );
  });
  return (
    <NavigationBlock>
      <MediaBasicScreen>
        <div className='nav-tab'>{menus}</div>
      </MediaBasicScreen>
      <MediaSmallScreen>
        <div className='nav-tab'>{smallMenus}</div>
      </MediaSmallScreen>

      <MediaBasicScreen>
        {isNavShown && <MainNavigation MainNavRef={MainNavRef} setNavShown={setNavShown} />}
      </MediaBasicScreen>
    </NavigationBlock>
  );
}

const NavigationBlock = styled.div`
  .nav-tab {
    display: flex;
    justify-content: center;
  }
`;
export default React.memo(Navigation);
