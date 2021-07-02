import * as sequelize from 'sequelize';
import { swatchFactory } from './swatch';
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

export const dbConfig = new sequelize.Sequelize(config.database, config.username, config.password, config);

// Export all models. Associate if necesssary
export const Swatch = swatchFactory(dbConfig);
