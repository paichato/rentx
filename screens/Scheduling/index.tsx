import { View, Text } from "react-native";
import React from "react";
import {
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Footer,
  Header,
  RentalPeriod,
  Title,
} from "./styles";
import { BackButton } from "../../components/BackButton";
import { useTheme } from "styled-components";
import ArrowIcon from "../../assets/images/arrow.svg";
// import Button from "../../components/Button";
import { Calendar } from "../../components/Calendar";
import { Button } from "../../components/Button";

export default function Scheduling({ navigation }: any) {
  const theme = useTheme();

  const handleConfirm = () => {
    navigation.navigate("SchedulingDetails");
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} color={theme.colors.shape} />
        <Title>
          Escolha uma {"\n"}data de início e{"\n"}fim do aluguel
        </Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue selected={false}>18 de Junho de 2021</DateValue>
          </DateInfo>
          <ArrowIcon />
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue selected={true}>18 de Junho de 2021</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar />
      </Content>
      <Footer>
        <Button onPress={handleConfirm} title="Confirmar" />
      </Footer>
    </Container>
  );
}
