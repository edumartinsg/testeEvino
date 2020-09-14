import styled from "styled-components";
export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: hidden;
  a:visited,
  a:hover,
  a:active {
    color: inherit;
  }
  a {
    text-decoration: none;
  }
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  padding: 2% 7.5% 2% 7.5%;
  display: flex;

  svg {
    margin-top: 10px;
    position: relative;
    top: 2px;
  }
  a {
    position: absolute;
  }
`;

export const WineContainer = styled.div`
  display: flex;

  flex: 1 0;
  align-self: center;
  background-color: beige;
  height: 400px;

  #wine {
    justify-content: center;
    align-self: center;
    position: absolute;
    left: 10%;
    flex-direction: flex-start;
    width: auto;
    height: auto;
    margin: auto;
  }
  div {
    margin-top: 40px;
    justify-content: center;
    align-self: center;
    display: grid;
    line-height: 1.5;
    margin-left: 40%;

    img {
      margin-left: -4%;
    }
  }
`;
