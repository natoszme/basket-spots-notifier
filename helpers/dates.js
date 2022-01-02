import config from "../config";
const { weekDayHourMin, weekDayHourMax, weekendDayHourMin, weekendDayHourMax } = config.dates;

const _isWeekDay = date => {
  const numberOfDay = date.day();
  return numberOfDay >= 1 && numberOfDay <= 5;
};

export const isWeekendDay = date => !_isWeekDay(date);

export const isValidWeekDay = date => _isWeekDay(date) && date.hour() >= weekDayHourMin && date.hour() <= weekDayHourMax;
export const isValidWeekendDay = date => isWeekendDay(date) && date.hour() >= weekendDayHourMin && date.hour() <= weekendDayHourMax;