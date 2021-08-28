import _ from "lodash";
import Promise from "bluebird";
import TelegramBotApi from 'telegram-bot-api';
import config from "./config";
const { telegramApi } = config;

class TelegramApi {
  constructor() {
    const { token } = telegramApi;
    this.api = new TelegramBotApi({ token });
    this._spotOption = this._spotOption.bind(this);
  }

  send(courtsWithSpots) {
    const { groupId, pollQuestion } = telegramApi;
    const spots = _.flatMap(courtsWithSpots, "spots");
    if (_.isEmpty(spots)) return Promise.resolve();
    
    const options = {
      chat_id: groupId,
      question: pollQuestion,
      options: this._pollOptions(courtsWithSpots),
      is_anonymous: "false",
      allows_multiple_answers: "true"
    };

    return this.api.sendPoll(options);
  }

  _pollOptions(courtsWithSpots) {
    const { pollMaxOptions } = telegramApi;
    return _(courtsWithSpots).flatMap(({ court, spots }) => _.map(spots, spot => ({ court, spot })))
    .take(pollMaxOptions)
    .map(this._spotOption)
    .value();
  }

  _spotOption({ court: { name }, spot }) {
    const loweredOption = `${spot.format("dddd DD/MM")} a las ${spot.format("HH:mm")} en ${name}`;
    return _.upperFirst(loweredOption);
  }
}

export default new TelegramApi();