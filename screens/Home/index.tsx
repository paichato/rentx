import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Container, Header } from "./styles";
// import { StatusBar } from "expo-status-bar";

export default function Home() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={"transparent"}
        translucent
      />
      <Header></Header>
    </Container>
  );
}
