import { View, Text } from "react-native";
import React from "react";
import { Container, Name } from "./styles";
import { SvgProps } from "react-native-svg";

interface Props {
  name: string;
  icon: React.FC<SvgProps>;
}

export function Acessory({ name, icon: Icon }: Props) {
  return (
    <Container>
      <Icon width={32} height={32} />
      <Name>{name}</Name>
    </Container>
  );
}
