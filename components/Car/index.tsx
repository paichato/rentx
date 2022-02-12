import { View, Text } from "react-native";
import React from "react";
import {
  About,
  Brand,
  CarImage,
  Container,
  Details,
  Name,
  Period,
  Price,
  Rent,
  Type,
} from "./styles";

import GasolineIcon from "../../assets/images/gasoline.svg";

export function Car() {
  return (
    <Container>
      <Details>
        <Brand>Audi</Brand>
        <Name>Coupe</Name>

        <About>
          <Rent>
            <Period>123</Period>
            <Price>9863</Price>
          </Rent>

          <Type>
            <GasolineIcon />
          </Type>
        </About>
      </Details>

      <CarImage source={{ uri: "" }} />
    </Container>
  );
}
