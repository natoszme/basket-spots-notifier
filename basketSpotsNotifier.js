import _ from "lodash";
import Promise from "bluebird";
import moment from "moment-timezone";
import config from "./config";
import gcbaApi from "./gcbaApi";
import telegramApi from "./telegramApi";
import courts from "./courts";
import { isValidWeekDay, isValidWeekendDay } from "./helpers/dates";
moment.locale('es');
moment.tz.setDefault("America/Argentina/Buenos_Aires");
const { fetchConcurrency: concurrency } = config;

const _availableDays = court => gcbaApi.availableDays(court);

const _availableTimes = (court, day) => gcbaApi.availableTimes(court, day)
.map(datetime => moment(datetime), { concurrency })
.filter(date => isValidWeekDay(date) || isValidWeekendDay(date));

const _courtSpots = court => _availableDays(court)
.map(day => _availableTimes(court, day))
.then(_.flatten);

const _courtWithSpots = court => _courtSpots(court)
.then(spots => ({ court, spots }))

const _notifySpots = courtsWithSpots => telegramApi.send(courtsWithSpots);

export default () => Promise.map(courts, _courtWithSpots, { concurrency })
.then(_notifySpots)
.catch(console.log);