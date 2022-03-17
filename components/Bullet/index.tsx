import { View, Text } from "react-native";
import React from "react";
import { Container } from "./styles";

interface BulletProps {
  active: boolean;
}

export default function Bullet({ active }: BulletProps) {
  return (
    <Container active={active}>
      <Text>index</Text>
    </Container>
  );
}
