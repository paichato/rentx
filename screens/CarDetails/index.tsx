import { View, Text, StatusBar } from "react-native";
import React from "react";
import {
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
      </Content>
    </Container>
  );
}
