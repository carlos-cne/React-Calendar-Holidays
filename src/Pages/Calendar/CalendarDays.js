import React from "react";
import moment from "moment";
import { daysInMonth, monthStart } from "./helpFunctions";
import { DayName, DayWrapper, HolidayEvent, IsHoliday } from "./styles";

const dayNames = moment.weekdaysShort();
const currentMonth = moment([moment().year(), moment().month()]);
const currentDate = moment().date();

export function CalendarDays(props) {
  const selectedMonthStart = monthStart(props.selectedPeriod);
  const daysInSelectedMonth = daysInMonth(props.selectedPeriod);
  const daysInLastMonth = daysInMonth(props.selectedPeriod, true);

  function fillCalendar() {
    let dayArr = [];
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
        dayArr[i] = {
          dayNumber: (leftDays + i).toString(),
          activeMonth: false,
          today: false
        };
      }
    }

    for (let i = 1; i <= daysInSelectedMonth; i++) {
      dayArr.push({
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
      dayArr.map((day, index) => {
        if (index < selectedMonthStart) return;
        if (holiday.day.toString() === day.dayNumber) {
          if (day.isHoliday) {
            day.holidays.push(holiday);
          } else {
            day.isHoliday = true;
            day.holidays = [holiday];
          }
        }
      });
    });

    if (dayArr.length < 35) {
      const afterDays = 35 - dayArr.length;
      for (let i = 1; i <= afterDays; i++) {
        dayArr.push({
          dayNumber: i.toString(),
          activeMonth: false,
          today: false
        });
      }
    }

    return dayArr;
  }

  let iterable = 0;
  const dayArr = fillCalendar();
  const calendarGrid = Array(5)
    .fill("day")
    .map(() =>
      dayNames.map(name => {
        const day = dayArr[iterable];
        iterable++;
        return (
          <DayWrapper
            key={iterable}
            isActiveMonth={day.activeMonth}
            today={day.today}
          >
            <DayName>{name}</DayName>
            {day.dayNumber}
            <HolidayEvent>{day.isHoliday && <IsHoliday />}</HolidayEvent>
          </DayWrapper>
        );
      })
    );

  return calendarGrid;
}
