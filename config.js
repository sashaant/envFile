const dotenv = require('dotenv');

class Config {
  constructor(envFile) {
    dotenv.config({ path: envFile });
    this.KEY1 = process.env.KEY1;
    this.KEY2 = process.env.KEY2;
  }
}

const development = new Config('.env.development');
const production = new Config('.env.production');
const testing = new Config('.env.testing');

module.exports = { development, production, testing };
