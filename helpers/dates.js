const _isWeekDay = date => {
  const numberOfDay = date.day();
  return numberOfDay >= 1 && numberOfDay <= 5;
};

const _isWeekendDay = date => !_isWeekDay(date);

export const isValidWeekDay = date => _isWeekDay(date) && date.hour() >= 18 && date.hour() <= 22;
export const isValidWeekendDay = date => _isWeekendDay(date) && date.hour() >= 10 && date.hour() <= 16;