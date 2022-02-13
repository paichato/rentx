import { View, Text, StatusBar } from "react-native";
import React from "react";
import { CarImages, Container, Header } from "./styles";
import { BackButton } from "../../components/BackButton";
import ImagesSlider from "../../components/ImagesSlider";

export default function CarDetails() {
  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Header>
        <BackButton />
      </Header>
      <CarImages>
        <ImagesSlider />
      </CarImages>
    </Container>
  );
}
