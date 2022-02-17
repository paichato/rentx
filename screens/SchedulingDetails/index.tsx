import { View, Text, StatusBar } from "react-native";
import React from "react";
import {
  About,
  Acessories,
  Brand,
  CalendarIcon,
  CarImages,
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent,
  RentalPeriod,
  RentalPrice,
  RentalPriceDetails,
  RentalPriceLabel,
  RentalPriceQuota,
  RentalPriceTotal,
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
import Button from "../../components/Button";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

export default function SchedulingDetails() {
  const theme = useTheme();

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
        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>19/02/22</DateValue>
          </DateInfo>
          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>19/02/22</DateValue>
          </DateInfo>
        </RentalPeriod>
        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 89 x3 diarias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.099</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button title="continuar" color="" />
      </Footer>
    </Container>
  );
}
