import { View, Text } from "react-native";
import React from "react";
import { BackButton } from "../../../components/BackButton";
import Bullet from "../../../components/Bullet";
import { Container, Header, Steps } from "./styles";

export default function SignUpFirstStep({ navigation }: any) {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} />
        <Steps>
          <Bullet active />

          <Bullet />
        </Steps>
      </Header>
    </Container>
  );
}
