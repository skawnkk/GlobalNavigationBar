import React, { useState, useRef } from 'react';
import styled from 'styled-components';
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
  return (
    <NavigationBlock>
      <div className='navi-tab'>{menus}</div>
      {isNavShown && <MainNavigation MainNavRef={MainNavRef} setNavShown={setNavShown} />}
    </NavigationBlock>
  );
}

const NavigationBlock = styled.div`
  .navi-tab {
    display: flex;
    justify-content: center;
  }
`;
export default React.memo(Navigation);
