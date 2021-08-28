export default {
  fetchConcurrency: parseInt(process.env.FETCH_CONCURRENCY) || 1,
  telegramApi: {
    token: process.env.TELEGRAM_API_TOKEN,
    groupId: process.env.TELEGRAM_API_GROUP_ID,
    pollQuestion: process.env.TELEGRAM_API_POLL_QUESTION || "Qué hora/lugar te viene bien para sumarte a un partidito?",
    pollMaxOptions: parseInt(process.env.TELEGRAM_API_POLL_MAX_OPTIONS) || 10
  }
};