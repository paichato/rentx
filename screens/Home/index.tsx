import { View, Text, StatusBar } from "react-native";
import React from "react";
import { CarList, Container, Header, HeaderContent, TotalCars } from "./styles";
// import { StatusBar } from "expo-status-bar";
import Logo from "../../assets/images/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { Car } from "../../components/Car";
import { NavigationProp } from "@react-navigation/native";

export default function Home({ navigation }: any) {
  const carData = {
    brand: "Lamborghini",
    name: "Urus",
    rent: {
      period: "string",
      price: 23423,
    },
    thumbnail:
      "https://images.drive.com.au/driveau/image/upload/b_auto,c_fill_pad,f_auto,g_auto,h_169,q_auto:good,w_300/vehicles/redbook/AUVLAMB2021AEAI/S0008Z8P",
  };

  function handleCarlSelection() {
    navigation.navigate("CarDetails");
  }

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
      <CarList
        data={[1, 2, 3]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <Car onPress={handleCarlSelection} data={carData} />
        )}
      />
      {/* <Car data={carData} />
      <Car data={carData} /> */}
    </Container>
  );
}
