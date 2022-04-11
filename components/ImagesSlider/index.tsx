import { View, Text, FlatList, ViewToken } from "react-native";
import React, { useRef, useState } from "react";
import { CarImage, CarImageWrapper, Container, ImageIndexes } from "./styles";
// import { CarImage } from "../Car/styles";

interface Props {
  imagesUrl: string[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

import Bullet from "../Bullet";

export default function ImagesSlider({ imagesUrl }: Props) {
  const [imageIndex, setImageIndex] = useState(0);

  const indexChanged = useRef((info: ChangeImageProps) => {
    console.log(info);
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  });

  return (
    <Container>
      <ImageIndexes>
        {imagesUrl.map((_, index) => (
          <Bullet key={String(index)} active={imageIndex === index} />
        ))}
      </ImageIndexes>

      <FlatList
        data={imagesUrl}
        keyExtractor={(key) => String(key)}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage
              source={{
                uri: item.photo,
              }}
            />
          </CarImageWrapper>
        )}
      />
    </Container>
  );
}
