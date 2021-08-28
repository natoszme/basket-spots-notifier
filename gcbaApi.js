import Promise from "bluebird";
import moment from "moment-timezone";
import request from "request-promise";

const impostorDays = [
  "2021-08-30",
  "2021-08-31",
  "2021-09-01"
];

const impostorDatetimes = [
  "2021-08-29T09:00:00.000",
  "2021-08-29T13:00:00.000",
  "2021-08-29T15:00:00.000"
];

class GcbaApi {
  constructor() {
    this.url = "https://formulario-sigeci.buenosaires.gob.ar";
  }

  availableDays({ id }) {
    const now = this._dateWithFormat(moment());
    //return Promise.resolve(impostorDays);
    return this._get("/FechasDisp", { fromDate: now, servicioId: id });
  }
  
  availableTimes({ id, fieldId }, day) {
    //return Promise.resolve(impostorDatetimes);
    return this._get("/getHorasDisp", { day, servicioId: id, sedeId: fieldId });
  }

  _get(path, qs) {
    return request.get({ url: `${this.url}${path}`, qs, json: true })
    .promise()
    .tapCatch({ statusCode: 500 }, err => console.log(err.message || err.statusCode || err) || [])
    .catchReturn({ statusCode: 500 }, []);
  }

  _dateWithFormat(date) {
    return date.format("YYYY-MM-DD");
  }
}

export default new GcbaApi();