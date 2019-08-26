import React, { useState } from "react";
import moment from "moment";
import { daysInMonth, monthStart } from "./helpFunctions";
import {
  DayName,
  DayWrapper,
  HolidayTagContainer,
  HolidayInfoBox,
  IsHoliday,
  HolidayDetail,
  HolidayName,
  WeekRow,
  ArrowHoliday
} from "./styles";

const dayNames = moment.weekdaysShort();
const currentMonth = moment([moment().year(), moment().month()]);
const currentDate = moment().date();

export function CalendarDays(props) {
  const selectedMonthStart = monthStart(props.selectedPeriod);
  const daysInSelectedMonth = daysInMonth(props.selectedPeriod);
  const daysInLastMonth = daysInMonth(props.selectedPeriod, true);

  function fillDaysInformation() {
    let days = [];
    let weeks = [];
    const holidays = props.holidays.holidays.holidays.map(holiday => {
      return {
        day: moment(holiday.date).date(),
        name: holiday.name,
        type: holiday.type
      };
    });

    if (selectedMonthStart > 0) {
      const leftDays = daysInLastMonth - selectedMonthStart + 1;
      for (let i = 0; i < selectedMonthStart; i++) {
        days[i] = {
          dayNumber: (leftDays + i).toString(),
          activeMonth: false,
          today: false
        };
      }
    }

    for (let i = 1; i <= daysInSelectedMonth; i++) {
      days.push({
        dayNumber: i < 10 ? `0${i}` : i.toString(),
        activeMonth: true,
        today:
          moment(currentMonth).isSame(props.selectedPeriod) &&
          currentDate.toString() === i.toString()
            ? true
            : false
      });
    }

    holidays.map(holiday => {
      return days.map((day, index) => {
        if (index < selectedMonthStart) {
          day.isHoliday = false;
          day.holidays = [];
        }

        if (holiday.day.toString() === day.dayNumber) {
          if (day.isHoliday) {
            day.holidays.push(holiday);
          } else {
            day.isHoliday = true;
            day.holidays = [holiday];
          }
        }
        return;
      });
    });

    if (days.length < 35) {
      const afterDays = 35 - days.length;
      for (let i = 1; i <= afterDays; i++) {
        days.push({
          dayNumber: i.toString(),
          activeMonth: false,
          today: false
        });
      }
    }

    let weekRow = [];
    for (let i = 0; i <= days.length; i++) {
      if (weekRow.length < 7) {
        weekRow.push(days[i]);
      } else {
        weeks.push(weekRow);
        weekRow = [];
        weekRow.push(days[i]);
      }
    }

    return weeks;
  }

  const weeks = fillDaysInformation();
  return weeks.map((week, weekIndex) => (
    <WeekRow key={weekIndex}>
      {dayNames.map((name, index) => (
        <DayWrapper
          isActiveMonth={week[index].activeMonth}
          today={week[index].today}
          onClick={() =>
            props.handleClickDay(weekIndex, week[index].holidays, index)
          }
        >
          <DayName>{name}</DayName>
          {week[index].dayNumber}
          <HolidayTagContainer>
            {week[index].isHoliday && <IsHoliday />}
          </HolidayTagContainer>
        </DayWrapper>
      ))}
      {weekIndex === props.selectedRow && (
        <HolidayDetail>
          <ArrowHoliday style={{ left: `${27 + 60 * props.selectedDay}px` }} />
          {props.selectedHoliday ? (
            props.selectedHoliday.map(holiday => {
              return (
                <HolidayInfoBox>
                  <HolidayName>{holiday.name}</HolidayName>
                </HolidayInfoBox>
              );
            })
          ) : (
            <HolidayInfoBox>
              <HolidayName>No holidays</HolidayName>
            </HolidayInfoBox>
          )}
        </HolidayDetail>
      )}
    </WeekRow>
  ));
}
