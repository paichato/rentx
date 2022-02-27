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
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent,
} from "./styles";
import { BackButton } from "../../components/BackButton";
import ImagesSlider from "../../components/ImagesSlider";
import { Acessory } from "../../components/Acessory";

// import SpeedSvg from "../../assets/images/speed.svg";
// import AccelarationSvg from "../../assets/images/acceleration.svg";
// import ForceSvg from "../../assets/images/force.svg";
// import GasolineSvg from "../../assets/images/gasoline.svg";
// import ExchangeSvg from "../../assets/images/exchange.svg";
// import PeopleSvg from "../../assets/images/people.svg";
import { Button } from "../../components/Button";
import { carDTO } from "../../dtos/carsDTOS";
import { getAcessoryIcon } from "../../utils/getAcessoryIcon";

export interface Params {
  car: carDTO;
}

export default function CarDetails({ navigation, route }: any) {
  const { car } = route.params as Params;

  console.log(car);

  const handleContinue = () => {
    console.log("hello");
    navigation.navigate("Scheduling", { car });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>
      <CarImages>
        <ImagesSlider imagesUrl={car.photos} />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>{"R$" + car.rent.price}</Price>
          </Rent>
        </Details>
        <Acessories>
          {car.accessories.map((accessory) => (
            <Acessory
              key={accessory.type}
              name={accessory.name}
              icon={getAcessoryIcon(accessory.type)}
            />
          ))}
          {/* <Acessory name="380Km/h" icon={SpeedSvg} />
          <Acessory name="3.2s" icon={AccelarationSvg} />
          <Acessory name="800 HP" icon={ForceSvg} />
          <Acessory name="Gasolina" icon={GasolineSvg} />
          <Acessory name="Auto" icon={ExchangeSvg} />
          <Acessory name="2 pessoas" icon={PeopleSvg} /> */}
        </Acessories>
        <About>{car.about}</About>
      </Content>
      <Footer>
        <Button
          onPress={handleContinue}
          title="Escolher periodo de aluguer"
          color=""
        />
      </Footer>
    </Container>
  );
}
