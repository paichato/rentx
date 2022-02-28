import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { carDTO } from "../../dtos/carsDTOS";
import api from "../../services/api";

export default function MyCars() {
  const [cars, setCars] = useState<carDTO>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await api.get("/schedules_byuser?user_id=1");
        // console.log("res", response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  });

  return (
    <Container>
      <Text>MyCars</Text>
    </Container>
  );
}
