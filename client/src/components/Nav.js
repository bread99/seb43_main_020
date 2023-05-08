import styled from "styled-components";
// import { useState } from "react"

const NavWrapper = styled.div`
  padding-top: 50px;
  border-top: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  justify-content: center;

  .nav--button {
    height: 30px;
    border: 2px solid #dcdcdc;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    background-color: white;

    :last-child {
      background-color: #408ef1;
      color: white;
      font-size: 1px;
      box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
      border: 1px solid;
    }
  }
`;

function Nav() {
  return (
    <NavWrapper>
      <button className="nav--button">카테고리 1</button>
      <button className="nav--button">카테고리 2</button>
      <button className="nav--button">카테고리 3</button>
      <button className="nav--button">카테고리 4</button>
      <button className="nav--button">카테고리 5</button>
      <button className="nav--button">카테고리 6</button>
      <button className="nav--button">✎ 글 작성</button>
    </NavWrapper>
  );
}

export default Nav;
