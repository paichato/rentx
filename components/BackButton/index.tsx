import { View, Text } from "react-native";
import React from "react";
import { Container } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { BorderlessButtonProps } from "react-native-gesture-handler";

interface Props extends BorderlessButtonProps {
  color?: string;
  onPress: () => void;
}

export function BackButton({ color, onPress }: Props) {
  const theme = useTheme();

  return (
    <Container onPress={onPress}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
}
