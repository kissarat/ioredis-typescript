/* eslint-disable @typescript-eslint/no-var-requires */
const IORedis = require('ioredis');

IORedis.IORedis = IORedis;
module.exports = IORedis;
