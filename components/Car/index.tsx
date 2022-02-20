import { View, Text, TouchableOpacityProps } from "react-native";
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

interface CarData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}

interface Props extends TouchableOpacityProps {
  data: CarData;
}

export function Car({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{`RS${data.rent.period}`}</Period>
            <Price>{`RS${data.rent.price}`}</Price>
          </Rent>

          <Type>
            <GasolineIcon />
          </Type>
        </About>
      </Details>

      <CarImage
        resizeMode="contain"
        source={{
          uri: data.thumbnail,
        }}
      />
    </Container>
  );
}
