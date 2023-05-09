const { Sequelize } = require('sequelize')
const { format } = require('date-fns')
const colors = require('colors');
const { config } = require('./../config/config')
const setupModels = require('./../db/models')

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: (message) => {
    console.log(`[${format(new Date(), 'yyyy/MM/dd hh:mm:ss a').help}]:>>> ${message}`);
  }
});

setupModels(sequelize);

module.exports = sequelize;
