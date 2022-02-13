import { View, Text } from "react-native";
import React from "react";
import {
  CarImage,
  CarImageWrapper,
  Container,
  ImageIndex,
  ImageIndexes,
} from "./styles";
// import { CarImage } from "../Car/styles";

interface Props {
  imagesUrl: string[];
}

export default function ImagesSlider() {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>
      <CarImageWrapper>
        <CarImage
          source={{
            uri: "https://images.drive.com.au/driveau/image/upload/b_auto,c_fill_pad,f_auto,g_auto,h_169,q_auto:good,w_300/vehicles/redbook/AUVLAMB2021AEAI/S0008Z8P",
          }}
        />
      </CarImageWrapper>
      <Text>ImagesSlider</Text>
    </Container>
  );
}
