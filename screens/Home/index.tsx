import { View, Text, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { CarList, Container, Header, HeaderContent, TotalCars } from "./styles";
// import { StatusBar } from "expo-status-bar";
import Logo from "../../assets/images/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { Car } from "../../components/Car";
import { NavigationProp } from "@react-navigation/native";
import api from "../../services/api";
import { carDTO } from "../../dtos/carsDTOS";

export default function Home({ navigation }: any) {
  const [cars, setCars] = useState<carDTO>([]);
  const [loading, setLoading] = useState(true);

  function handleCarlSelection() {
    navigation.navigate("CarDetails");
  }

  useEffect(() => {
    const getCars = async () => {
      api
        .get("/cars")
        .then((res) => {
          console.log(res.data);
          setCars(res.data);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    };

    getCars();
  }, []);

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
        data={cars}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <Car onPress={handleCarlSelection} data={item} />
        )}
      />
      {/* <Car data={carData} />
      <Car data={carData} /> */}
    </Container>
  );
}
