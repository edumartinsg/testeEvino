import styled from "styled-components";
export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #181818;
  color: ghostwhite;
  overflow-x: hidden;
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

  padding: 2% 5.5% 2% 5.5%;
  display: flex;
  flex-direction: column;
`;

export const WineBanner = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;

  img {
    margin-left: 2%;
    margin-bottom: 20px;
    width: 425px;
    flex: 1 1;
  }

  div {
    background-color: #7e6e6c;
    height: fit-content;

    color: #141414;
    opacity: 0.5;
    position: absolute;
    left: 2%;
    padding: 15px;
    width: 98%;
    h1 {
      vertical-align: middle;
      text-align: center;
      font-family: Arial, Helvetica, sans-serif;
      margin-left: 15px;
    }
  }
`;

export const WineSection = styled.section`
  h1 {
    font-family: Roboto;
    font-weight: 800;
    text-align: center;
    margin-left: 20px;
    font-size: 40px;
  }

  p {
    font-family: Roboto;
    font-weight: 800;
    text-align: center;
    margin-left: 20px;
    font-size: 20px;
  }
`;
export const WineFilter = styled.div``;
export const ProductsContent = styled.div`
  display: flex;
  flex: 1;
  height: 400px;
  width: 100%;
`;
export const WineList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const WineCard = styled.div`
  flex: 1 1;
  display: flex;
  margin-bottom: 10px;
  margin-left: 2%;
  flex-basis: 45%;
  background-color: beige;
  flex-direction: column;

  img {
    display: block;
    width: auto;
    height: auto;
    margin: auto;
  }

  a {
    background-color: #7e6e6c;
    font-size: 14px;
    text-align: center;
  }
`;
export const CountryFilter = styled.div``;
export const GrapeFilter = styled.div``;
