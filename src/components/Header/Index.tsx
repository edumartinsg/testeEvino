import React from "react";

import logoEvino from "../../assets/logoEvino.svg";
import { Header, HeaderContent } from "./styles";

const HeaderComponent: React.FC = () => {
  return (
    <Header>
      <HeaderContent>
        <img src={logoEvino} alt="Brasilcash logo" />
      </HeaderContent>
    </Header>
  );
};

export default HeaderComponent;
