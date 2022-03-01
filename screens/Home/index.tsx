import { View, Text, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import {
  CarList,
  Container,
  Header,
  HeaderContent,
  TotalCars,
  MyCarsButton,
} from "./styles";
// import { StatusBar } from "expo-status-bar";
import Logo from "../../assets/images/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { Car } from "../../components/Car";
import { NavigationProp } from "@react-navigation/native";
import api from "../../services/api";
import { carDTO } from "../../dtos/carsDTOS";
import { Loader } from "../../components/Loader";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";

export default function Home({ navigation }: any) {
  const [cars, setCars] = useState<carDTO>([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  function handleCarlSelection(car: carDTO) {
    navigation.navigate("CarDetails", { car });
  }
  function handleOpensMyCars() {
    navigation.navigate("MyCars");
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

  // if (loading) {
  //   return <Loader />;
  // }

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
          <TotalCars>Total de {cars.length} carros</TotalCars>
        </HeaderContent>
      </Header>
      {loading ? (
        <Loader />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <Car onPress={() => handleCarlSelection(item)} data={item} />
          )}
        />
      )}
      <MyCarsButton onPress={handleOpensMyCars}>
        <Ionicons color={theme.colors.shape} name="ios-car-sport" size={38} />
      </MyCarsButton>

      {/* <Car data={carData} />
      <Car data={carData} /> */}
    </Container>
  );
}
