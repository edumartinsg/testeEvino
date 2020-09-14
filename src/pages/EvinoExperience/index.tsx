import React, { useState, useEffect } from "react";
import {
  Container,
  Content,
  WineBanner,
  WineSection,
  WineCard,
  ProductsContent,
  CountryFilter,
  GrapeFilter,
  WineList,
} from "./styles";
import { Link } from "react-router-dom";

import wineImg from "../../assets/wines.jpg";
import api from "../../services/api";
import HeaderComponent from "../../components/Header/Index";
// import { sign } from "crypto";

interface IWineData {
  data: {
    products: [
      {
        sku: string;
        name: string;
        quantity: number;
        wineURLDetails: string;
        type: string;
        grapeList: string;
        url: string;
        images: {
          medium: string;
        };
      }
    ];
  };
}

const EvinoExperience: React.FC = () => {
  const [wineType, setWineType] = useState("");
  const [wines, setWines] = useState<IWineData>();

  useEffect(() => {
    async function loadWines(): Promise<void> {
      // TODO
      const response = await api.get("");
      if (response.data) {
        setWines(response.data);
      }
    }

    loadWines();
  }, []);
  return (
    <Container>
      <HeaderComponent />
      <Content>
        <WineBanner>
          <img src={wineImg} alt="Vinhos diversos" />
          <div>
            <h1>Dicas da semana</h1>
          </div>
        </WineBanner>
        <ProductsContent>
          <CountryFilter></CountryFilter>
          <GrapeFilter></GrapeFilter>
          <WineList>
            {!!wines &&
              wines.data.products.map((product) => (
                <WineCard>
                  <img src={product.images.medium} alt={product.name} />
                  <Link
                    to={{
                      pathname: "/WineDetails",
                      state: product.url,
                    }}
                    key={product.name}
                  >
                    <strong>{product.name}</strong>
                  </Link>
                </WineCard>
              ))}
          </WineList>
        </ProductsContent>
      </Content>
    </Container>
  );
};

export default EvinoExperience;
