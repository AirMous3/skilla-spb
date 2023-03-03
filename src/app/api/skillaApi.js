import axios from 'axios';

const skillaInstance = axios.create({
  baseURL: process.env.REACT_APP_SKILLA_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_SKILLA_TOKEN}`,
  },
});

export const callsAPI = {
  getCalls(dateStart, dateEnd) {
    return skillaInstance
      .post(`getList?date_start=${dateStart}&date_end=${dateEnd}`)
      .then((result) => result.data.results);
  },
};
