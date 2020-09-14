import React, { useState, useEffect } from "react";
import { Container, Content, WineContainer } from "./styles";

import HeaderComponent from "../../components/Header/Index";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

interface IProps {
  location: {
    state: string;
  };
}

interface IWineData {
  data: {
    sku: string;
    name: string;
    quantity: number;
    wineURLDetails: string;
    type: string;
    grapeList: string;
    url: string;
    countries: [
      {
        name: string;
        icon: string;
      }
    ];
    servingTemperature: string;
    images: {
      medium: string;
    };
  };
}

const WineDetails: React.FC<IProps> = ({ location }) => {
  const [wineDetail, setWineDetail] = useState<IWineData>();

  useEffect(() => {
    let wineUrl = location.state;
    async function loadWineDetail(): Promise<void> {
      const response = await api.get(`/${wineUrl}`);
      if (response.data) {
        setWineDetail(response.data);
      }
    }

    loadWineDetail();
  }, [location.state]);

  console.log(wineDetail);

  return (
    <>
      <Container>
        <HeaderComponent />
        <Content>
          <Link to="/">
            <FiChevronLeft />
            Voltar
          </Link>
          <WineContainer>
            <img
              id="wine"
              src={wineDetail?.data.images.medium}
              alt={wineDetail?.data.name}
            />
            <div>
              <strong>{wineDetail?.data.name}</strong>
              <span>{wineDetail?.data.type}</span>
              <span>{wineDetail?.data.grapeList}</span>
              <span>{wineDetail?.data.servingTemperature}</span>
              <span>{wineDetail?.data.grapeList}</span>
              <img
                src={wineDetail?.data.countries[0].icon}
                alt={wineDetail?.data.countries[0].name}
              />
            </div>
          </WineContainer>
        </Content>
      </Container>
    </>
  );
};

export default WineDetails;
