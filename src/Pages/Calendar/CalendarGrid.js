import React from "react";
import moment from "moment";
import { SelectMonth, MonthTitle, ArrowRight, ArrowLeft } from "./styles";
import { CalendarDays } from "./CalendarDays";
import { PageLoading } from "../PageLoading";

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
      {props.isFetching ? (
        <PageLoading />
      ) : (
        <CalendarDays
          selectedPeriod={props.selectedPeriod}
          holidays={props.holidays}
          selectedRow={props.selectedRow}
          selectedHoliday={props.selectedHoliday}
          selectedDay={props.selectedDay}
          handleClickDay={(row, holiday, day) =>
            props.handleClickDay(row, holiday, day)
          }
        />
      )}
    </>
  );
}
