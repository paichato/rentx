import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Container, Header } from "./styles";
// import { StatusBar } from "expo-status-bar";
import Logo from "../../assets/images/logo.svg";

export default function Home() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={"transparent"}
        translucent
      />
      <Header>
        <Logo />
      </Header>
    </Container>
  );
}
