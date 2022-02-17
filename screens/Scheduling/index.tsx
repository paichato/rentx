import { View, Text } from "react-native";
import React from "react";
import { Container, Header, Title } from "./styles";
import { BackButton } from "../../components/BackButton";
import { useTheme } from "styled-components";

export default function Scheduling() {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <BackButton color={theme.colors.shape} />
        <Title>
          Escolha uma {"\n"} data de início e{"\n"} fim do aluguel
        </Title>
      </Header>
    </Container>
  );
}
