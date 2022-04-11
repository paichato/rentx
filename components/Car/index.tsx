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

// import GasolineIcon from "../../assets/images/gasoline.svg";
import { carDTO } from "../../dtos/carsDTOS";
import { getAcessoryIcon } from "../../utils/getAcessoryIcon";

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
  data: carDTO;
}

export function Car({ data, ...rest }: Props) {
  const MotorIcon = getAcessoryIcon(data?.fuel_type);

  return (
    <Container {...rest}>
      <Details>
        <Brand>{data?.brand}</Brand>
        <Name>{data?.name}</Name>

        <About>
          <Rent>
            <Period>{`${data?.period}`}</Period>
            <Price>{`RS${data?.price}`}</Price>
          </Rent>

          <Type>
            {/* <GasolineIcon /> */}
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <CarImage
        resizeMode="contain"
        source={{
          uri: data?.thumbnail,
        }}
      />
    </Container>
  );
}
