import React from 'react';
import styled from 'styled-components';
function Menu({ setNavShown, MainNavRef, children }) {
  const handleMouseMove = (children) => {
    if (children !== '탐색') return;
    setNavShown(true);
  };
  const handleMouseLeave = ({ relatedTarget }) => {
    if (!relatedTarget || relatedTarget === MainNavRef.current) return;
    if (relatedTarget.closest('.header')) setNavShown(false);
  };

  return (
    <MenuBlock className='header' onMouseEnter={() => handleMouseMove(children)} onMouseOut={handleMouseLeave}>
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
