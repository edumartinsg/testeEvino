import styled from "styled-components";

export const Header = styled.header`
  height: 56px;
  background: ghostwhite;
  position: sticky;
  z-index: 100;
  top: 0;
  width: 100%;
  box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.1);
`;

export const HeaderContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  align-items: center;

  @media screen and (max-width: 868px) {
    justify-content: center;
    align-items: center;
  }

  img {
    height: 40px;
    position: relative;
    left: 8%;

    @media screen and (max-width: 868px) {
      justify-content: center;
      align-items: center;
      position: inherit;
    }
  }
`;
