import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Appointments,
  AppointmentsQuantity,
  AppointmentsTitle,
  Container,
  Content,
  Subtitle,
} from "./styles";
import { carDTO } from "../../dtos/carsDTOS";
import api from "../../services/api";
import { Header, Title } from "../Scheduling/styles";
import { BackButton } from "../../components/BackButton";
import { useTheme } from "styled-components";

export default function MyCars({ navigation }) {
  const [cars, setCars] = useState<carDTO>([]);
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
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  });

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
          <AppointmentsQuantity>05</AppointmentsQuantity>
        </Appointments>
      </Content>
    </Container>
  );
}
