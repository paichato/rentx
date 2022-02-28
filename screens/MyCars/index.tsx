import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Appointments,
  AppointmentsQuantity,
  AppointmentsTitle,
  CarFooter,
  CarFooterDate,
  CarFooterPeriod,
  CarFooterTitle,
  CarWrapper,
  Container,
  Content,
  Subtitle,
} from "./styles";
import { carDTO } from "../../dtos/carsDTOS";
import api from "../../services/api";
import { Header, Title } from "../Scheduling/styles";
import { BackButton } from "../../components/BackButton";
import { useTheme } from "styled-components";
import { Car } from "../../components/Car";
import { AntDesign } from "@expo/vector-icons";

interface CarProps {
  id: string;
  user_id: string;
  car: carDTO;
}

export default function MyCars({ navigation }) {
  const [cars, setCars] = useState<CarProps>([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  const handleBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await api.get("/schedules_byuser?user_id=1");
        // console.log("res", response.data);
        setCars(response.data);
        console.log();
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} color={theme.colors.shape} />
        <Title>Seus agendamentos,{"\n"}estão aqui. </Title>
        <Subtitle>Conforto, segurança e praticidade.</Subtitle>
      </Header>
      <Content>
        <Appointments>
          <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
          <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
        </Appointments>
        <FlatList
          data={cars}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <CarWrapper>
                <Car data={item.car} />
                <CarFooter>
                  <CarFooterTitle>Periodo</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.startDate}</CarFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={20}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 11 }}
                    />
                    <CarFooterDate>{item.endDate}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            );
          }}
        />
      </Content>
    </Container>
  );
}
