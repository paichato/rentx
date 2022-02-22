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

export default function ImagesSlider({ imagesUrl }: Props) {
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
            uri: imagesUrl[0],
          }}
        />
      </CarImageWrapper>
    </Container>
  );
}
