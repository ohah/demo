import React from 'react'
import styled from 'styled-components';

export const Menu = styled.button`
  height: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0 8px;
  color: #4e5968;
  & .div {
    background:red; 
  }
  &:hover {
    background:blue;
  }
`;
const Header = () => {
  return (
    <div>
      <Menu> 으아아 </Menu>
      <Menu> 
        <span>ㅁㄴㅇㄹ </span>
        <div className='div'>ㅁㄴㅇㄹ </div> 
      </Menu>
    </div>
  )
}

export default Header