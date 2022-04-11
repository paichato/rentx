import { View, Text, StatusBar, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import {
  About,
  Acessories,
  Brand,
  CalendarIcon,
  CarImages,
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent,
  RentalPeriod,
  RentalPrice,
  RentalPriceDetails,
  RentalPriceLabel,
  RentalPriceQuota,
  RentalPriceTotal,
} from "./styles";
import { BackButton } from "../../components/BackButton";
import ImagesSlider from "../../components/ImagesSlider";
import { Acessory } from "../../components/Acessory";

import SpeedSvg from "../../assets/images/speed.svg";
import AccelarationSvg from "../../assets/images/acceleration.svg";
import ForceSvg from "../../assets/images/force.svg";
import GasolineSvg from "../../assets/images/gasoline.svg";
import ExchangeSvg from "../../assets/images/exchange.svg";
import PeopleSvg from "../../assets/images/people.svg";
import { Button } from "../../components/Button";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { Params } from "../CarDetails";
import { getAcessoryIcon } from "../../utils/getAcessoryIcon";
import { getPlatformDate } from "../../utils/getPlatformDate";
import { format } from "date-fns";
import api from "../../services/api";

interface RentalPeriodProps {
  start: string;
  end: string;
}

interface DatesProps {
  dates: string[];
}

export default function SchedulingDetails({ navigation, route }: any) {
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>(
    {} as RentalPeriodProps
  );
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const { car } = route.params as Params;
  const { dates } = route.params as DatesProps;
  const rentTotal = Number(dates.length * Number(car.rent.price));

  const handleConfirm = async () => {
    setLoading(true);
    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);
    // console.log("SC by car:", schedulesByCar);
    console.log("car id:", car.id);

    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates,
    ];

    console.log("UN DATES:", unavailable_dates);

    await api.post("schedules_byuser", {
      user_id: 1,
      car,
      startDate: format(getPlatformDate(new Date(dates[0])), "dd/MM/yyyy"),
      endDate: format(
        getPlatformDate(new Date(dates[dates.length - 1])),
        "dd/MM/yyyy"
      ),
    });

    api
      .put(`/schedules_bycars/${car.id}`, { id: car.id, unavailable_dates })
      .then((res) => {
        navigation.navigate("Confirmation", {
          title: "Carro alugado!",
          message:
            'Agora voce so precisa ir {"\n"} ate a concessionaria da RENTX {"\n"} pegar o seu automovel.',
          nexScreenRoute: "Home",
        });
        setLoading(false);
      })
      .catch((err) => {
        Alert.alert("Nao foi possivel confirmar agendamento");
        setLoading(false);
      });
  };

  const handleBack = () => {
    navigation.goback();
  };

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), "dd/MM/yyyy"),
      end: format(
        getPlatformDate(new Date(dates[dates.length - 1])),
        "dd/MM/yyyy"
      ),
    });
  }, []);

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Header>
        <BackButton onPress={handleBack} />
      </Header>
      <CarImages>
        <ImagesSlider imagesUrl={car.photos} />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car?.period}</Period>
            <Price>{"R$" + car.price}</Price>
          </Rent>
        </Details>
        <Acessories>
          {car.accessories.map((acessory) => (
            <Acessory
              key={acessory.type}
              name={acessory.name}
              icon={getAcessoryIcon(acessory.type)}
            />
          ))}
        </Acessories>
        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>
          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>
        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>{`R$ ${car.price} x${dates.length} diarias`}</RentalPriceQuota>
            <RentalPriceTotal>{"R$" + rentTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button
          loading={loading}
          onPress={handleConfirm}
          enabled={!loading}
          title="Alugar agora"
          color={theme.colors.sucess}
        />
      </Footer>
    </Container>
  );
}
