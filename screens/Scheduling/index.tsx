import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Footer,
  Header,
  RentalPeriod,
  Title,
} from "./styles";
import { BackButton } from "../../components/BackButton";
import { useTheme } from "styled-components";
import ArrowIcon from "../../assets/images/arrow.svg";
// import Button from "../../components/Button";
import {
  Calendar,
  DayProps,
  generateInterval,
  MarkedDateProps,
} from "../../components/Calendar";
import { Button } from "../../components/Button";
import { format } from "date-fns";
import { getPlatformDate } from "../../utils/getPlatformDate";

interface RentalPeriodProps {
  start: number;
  startFormatted: string;
  end: number;
  endFormatted: string;
}

export default function Scheduling({ navigation }: any) {
  const theme = useTheme();
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );

  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );

  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>(
    {} as RentalPeriodProps
  );

  const handleConfirm = () => {
    navigation.navigate("SchedulingDetails");
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleChangeDate = (date: DayProps) => {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      start: start.timestamp,
      end: end.timestamp,
      startFormatted: format(
        getPlatformDate(new Date(firstDate)),
        "dd/MM/yyyy"
      ),
      endFormatted: format(getPlatformDate(new Date(firstDate)), "dd/MM/yyyy"),
    });
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} color={theme.colors.shape} />
        <Title>
          Escolha uma {"\n"}data de início e{"\n"}fim do aluguel
        </Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue selected={false}>
              {rentalPeriod.startFormatted}
            </DateValue>
          </DateInfo>
          <ArrowIcon />
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue selected={true}>{rentalPeriod.startFormatted}</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>
      <Footer>
        <Button onPress={handleConfirm} title="Confirmar" />
      </Footer>
    </Container>
  );
}
