import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Container, Header, TotalCars } from "./styles";
// import { StatusBar } from "expo-status-bar";
import Logo from "../../assets/images/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";

export default function Home() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={"transparent"}
        translucent
      />
      <Header>
        <Logo width={RFValue(108)} height={RFValue(12)} />
        <TotalCars>Total de 12 carros</TotalCars>
      </Header>
    </Container>
  );
}
