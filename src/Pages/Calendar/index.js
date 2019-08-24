import React, { useState, useEffect } from "react";
import moment from "moment";
import { Container } from "./styles";
import { getHolidays } from "./helpFunctions";
import { CalendarGrid } from "./CalendarGrid";

const apiReturn = {
  errors: null,
  holidays: {
    holidays: [
      {
        country: "BR",
        date: "2019-08-11",
        end: "2019-08-12T00:00:00.000Z",
        name: "Father's Day",
        public: false,
        start: "2019-08-11T00:00:00.000Z",
        type: "observance"
      }
    ]
  }
};

export function Calendar() {
  const [selectedPeriod, setSelectedPeriod] = useState([
    moment().year(),
    moment().month()
  ]);
  const [isFetching, setIsFetching] = useState(true);
  const [holidays, setHolidays] = useState(null);

  useEffect(() => {
    async function fetchHolidays() {
      // const holidays = await getHolidays(selectedPeriod);
      const holidays = await new Promise((res, rej) => {
        setTimeout(() => {
          res(apiReturn);
        }, 300);
      });
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

  return (
    <Container>
      <CalendarGrid
        selectedPeriod={selectedPeriod}
        handleChangePeriod={handleChangePeriod}
        holidays={holidays}
        isFetching={isFetching}
      />
    </Container>
  );
}
