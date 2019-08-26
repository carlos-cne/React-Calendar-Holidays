import React, { useState, useEffect } from "react";
import moment from "moment";
import { Container } from "./styles";
import { CalendarGrid } from "./CalendarGrid";
import { getHolidays } from "./helpFunctions";

export function Calendar() {
  const [selectedPeriod, setSelectedPeriod] = useState([
    moment().year(),
    moment().month()
  ]);
  const [isFetching, setIsFetching] = useState(true);
  const [holidays, setHolidays] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedHoliday, setSelectedHoliday] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    setIsFetching(true);
    setSelectedRow(null);
    setSelectedHoliday(null);
    setSelectedDay(null);
    async function fetchHolidays() {
      const holidays = await getHolidays(selectedPeriod);
      setHolidays(holidays);
      setIsFetching(false);
      return;
    }
    fetchHolidays();
  }, [selectedPeriod]);

  function handleChangePeriod(event) {
    const action = event.currentTarget.id;

    if (action === "substract") {
      const newMonth = moment(selectedPeriod).subtract(1, "month");
      return setSelectedPeriod([newMonth.year(), newMonth.month()]);
    } else if (action === "add") {
      const newMonth = moment(selectedPeriod).add(1, "month");
      return setSelectedPeriod([newMonth.year(), newMonth.month()]);
    }
  }

  function handleClickDay(row, holiday, day) {
    setSelectedRow(row);
    setSelectedHoliday(holiday);
    setSelectedDay(day);
  }

  return (
    <Container>
      <CalendarGrid
        selectedPeriod={selectedPeriod}
        handleChangePeriod={handleChangePeriod}
        holidays={holidays}
        isFetching={isFetching}
        selectedRow={selectedRow}
        selectedHoliday={selectedHoliday}
        selectedDay={selectedDay}
        handleClickDay={(row, holiday, day) =>
          handleClickDay(row, holiday, day)
        }
      />
    </Container>
  );
}
