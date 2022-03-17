import { View, Text } from "react-native";
import React from "react";
import { Container } from "./styles";

interface BulletProps {
  active?: boolean;
}

export default function Bullet({ active = false }: BulletProps) {
  return <Container active={active} />;
}
