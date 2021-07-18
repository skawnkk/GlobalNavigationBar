import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Logo() {
  return (
    <Link to='/'>
      <LogoBlock>
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt='logo' height='50' />
      </LogoBlock>
    </Link>
  );
}

const LogoBlock = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100px;
  height: 50px;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    left: -50px;
  }
`;
export default Logo;
