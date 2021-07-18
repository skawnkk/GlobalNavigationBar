import React from 'react';
import styled from 'styled-components';
function Menu({ setNavShown, MainNavRef, children }) {
  const handleMouseMove = (children, e) => {
    if (children !== '탐색') return;
    setNavShown(true);
  };
  const handleMouseLeave = (e) => {
    const keepStateBlock = e.relatedTarget;
    if (keepStateBlock === MainNavRef.current) return;
    setNavShown(false);
  };

  return (
    <MenuBlock onMouseEnter={(e) => handleMouseMove(children, e)} onMouseLeave={(e) => handleMouseLeave(e)}>
      {children}
    </MenuBlock>
  );
}
const MenuBlock = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: ${({ theme }) => theme.size.md}px;
  height: 71px;
  padding: 0 20px;
  cursor: pointer;
  border-bottom: 3px solid ${({ theme }) => theme.color.transparent};
  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.color.grey};
  }
`;
export default React.memo(Menu);
