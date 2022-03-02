import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { Container } from "./styles";
import loadingCar from "../../assets/images/load_animation.json";

export default function LoadAnimation() {
  return (
    <Container>
      <LottieView
        autoPlay
        style={{ height: 200 }}
        source={loadingCar}
        resizeMode="contain"
        loop
      />
    </Container>
  );
}
