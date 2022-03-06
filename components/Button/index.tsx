import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { Container, Title } from "./styles";
import theme from "../../styles/theme";

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
  enabled?: boolean;
  loading?: boolean;
  light?: boolean;
}

export function Button({
  title,
  color,
  onPress,
  enabled = true,
  loading = false,
  light = false,
}: Props) {
  return (
    <Container
      disabled={!enabled}
      color={color}
      onPress={onPress}
      // enabled={enabled}
      style={{ opacity: enabled === false || loading === true ? 0.5 : 1 }}
    >
      {loading ? (
        <ActivityIndicator size="large" color={theme.colors.shape} />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
}
