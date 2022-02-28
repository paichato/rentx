import { View, Text } from "react-native";
import React from "react";
import { Container, Title } from "./styles";

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
  enabled?: boolean;
}

export function Button({ title, color, onPress, enabled = true }: Props) {
  return (
    <Container
      disabled={!enabled}
      color={color}
      onPress={onPress}
      // enabled={enabled}
      style={enabled ? { opacity: 1 } : { opacity: 0.6 }}
    >
      <Title>{title}</Title>
    </Container>
  );
}
