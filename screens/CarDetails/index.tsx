import { View, Text, StatusBar } from "react-native";
import React from "react";
import {
  About,
  Acessories,
  Brand,
  CarImages,
  Container,
  Content,
  Description,
  Details,
  Header,
  Name,
  Period,
  Price,
  Rent,
} from "./styles";
import { BackButton } from "../../components/BackButton";
import ImagesSlider from "../../components/ImagesSlider";
import { Acessory } from "../../components/Acessory";

import SpeedSvg from "../../assets/images/speed.svg";
import AccelarationSvg from "../../assets/images/acceleration.svg";
import ForceSvg from "../../assets/images/force.svg";
import GasolineSvg from "../../assets/images/gasoline.svg";
import ExchangeSvg from "../../assets/images/exchange.svg";
import PeopleSvg from "../../assets/images/people.svg";

export default function CarDetails() {
  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Header>
        <BackButton />
      </Header>
      <CarImages>
        <ImagesSlider />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>Lambo</Brand>
            <Name>Hurr</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$12123</Price>
          </Rent>
        </Details>
        <Acessories>
          <Acessory name="380Km/h" icon={SpeedSvg} />
          <Acessory name="3.2s" icon={AccelarationSvg} />
          <Acessory name="800 HP" icon={ForceSvg} />
          <Acessory name="Gasolina" icon={GasolineSvg} />
          <Acessory name="Auto" icon={ExchangeSvg} />
          <Acessory name="2 pessoas" icon={PeopleSvg} />
        </Acessories>
        <About>Este e um automovel Na na na etc etc you know how we do</About>
      </Content>
    </Container>
  );
}
