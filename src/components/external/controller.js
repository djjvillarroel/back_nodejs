const axios = require("axios");
const URL_COVID = process.env.API_COVID;

async function getCovidIndicatorByCountry(params) {
  try {
    const DATA_BY_CONTRIES = "total/country";
    console.log(`${URL_COVID}/${DATA_BY_CONTRIES}/${params}`);
    const { data } = await axios.get(
      `${URL_COVID}/${DATA_BY_CONTRIES}/${params}`
    );
    return data;
  } catch (error) {
    throw error;
  }
}

async function getCovidCountries() {
  try {
    console.log(`${URL_COVID}/countries`);
    const { data } = await axios.get(`${URL_COVID}/countries`);
    return data;
  } catch (error) {
    throw error;
  }
}

module.exports = { getCovidIndicatorByCountry, getCovidCountries };
