const axios = require("axios");
const rateLimit = require("axios-rate-limit");


// this was to generate a log file with fake requests generator 

/**
 * create the axios instance with the given base url ,wrappd with rate limit
 * @param {string} baseURL - base url string
 * @returns {Instance} - axios instance
 */
module.exports = (baseURL) => {
  return rateLimit(
    axios.create({
      baseURL: baseURL,
    }),
    {
      maxRequests: 1,
      perMilliseconds: 500,
      maxRPS: 1,
    }
  );
};
