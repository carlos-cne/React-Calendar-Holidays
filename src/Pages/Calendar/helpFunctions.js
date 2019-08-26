import moment from "moment";
import { API_KEY } from "../../config/apiKey";

export function monthStart(activeMonth) {
  return moment(activeMonth)
    .startOf("month")
    .format("d");
}

export function daysInMonth(activeMonth, substract = false) {
  if (substract) {
    return moment(activeMonth)
      .subtract(1)
      .daysInMonth();
  } else {
    return moment(activeMonth).daysInMonth();
  }
}

export async function getHolidays(selectedPeriod) {
  const month = selectedPeriod[1] + 1;
  const year = selectedPeriod[0];
  try {
    const response = await fetch(
      `https://getfestivo.com/v1/holidays?api_key=${API_KEY}&country=BR&year=${year}&month=${month}`
    );
    return await response.json();
  } catch (error) {
    return {
      errors: [
        "oh, oh... we found an error, please, check your internet connection and try again."
      ],
      message: error
    };
  }
}
