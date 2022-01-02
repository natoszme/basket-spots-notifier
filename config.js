export default {
  fetchConcurrency: parseInt(process.env.FETCH_CONCURRENCY) || 1,
  telegramApi: {
    token: process.env.TELEGRAM_API_TOKEN,
    groupId: process.env.TELEGRAM_API_GROUP_ID,
    pollQuestion: process.env.TELEGRAM_API_POLL_QUESTION || "Qué hora/lugar te viene bien para armar un partidito?",
    pollMaxOptions: parseInt(process.env.TELEGRAM_API_POLL_MAX_OPTIONS) || 10
  },
  dates: {
    weekDayHourMin: parseInt(process.env.WEEK_DAY_HOUR_MIN) || 16,
    weekDayHourMax: parseInt(process.env.WEEK_DAY_HOUR_MAX) || 22,
    weekendDayHourMin: parseInt(process.env.WEEKEND_DAY_HOUR_MIN) || 9,
    weekendDayHourMax: parseInt(process.env.WEEKEND_DAY_HOUR_MAX) || 18,
    priorizeWeekends: process.env.PRIORIZE_WEEKENDS == "true"
  }
};