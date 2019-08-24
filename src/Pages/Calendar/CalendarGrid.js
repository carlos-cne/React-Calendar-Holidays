import React from "react";
import moment from "moment";
import {
  SelectMonth,
  DayGrid,
  MonthTitle,
  ArrowRight,
  ArrowLeft
} from "./styles";
import { CalendarDays } from "./CalendarDays";

export function CalendarGrid(props) {
  return (
    <>
      <SelectMonth>
        <ArrowLeft id="substract" onClick={props.handleChangePeriod} />
        <MonthTitle>
          {moment(props.selectedPeriod).format("MMMM YYYY")}
        </MonthTitle>
        <ArrowRight id="add" onClick={props.handleChangePeriod} />
      </SelectMonth>
      {!props.isFetching && (
        <DayGrid>
          <CalendarDays
            selectedPeriod={props.selectedPeriod}
            holidays={props.holidays}
          />
        </DayGrid>
      )}
    </>
  );
}
