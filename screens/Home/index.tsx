import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Container, Header, HeaderContent, TotalCars } from "./styles";
// import { StatusBar } from "expo-status-bar";
import Logo from "../../assets/images/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { Car } from "../../components/Car";

export default function Home() {
  const carData = {
    brand: "string",
    name: "string",
    rent: {
      period: "string",
      price: "number",
    },
    thumbnail:
      "https://images.drive.com.au/driveau/image/upload/b_auto,c_fill_pad,f_auto,g_auto,h_169,q_auto:good,w_300/vehicles/redbook/AUVLAMB2021AEAI/S0008Z8P",
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={"transparent"}
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <Car data={carData} />
      <Car data={carData} />
    </Container>
  );
}
