import { connection } from './connection';
import { DataTypes } from 'sequelize';

const Swatch = connection.define('swatch', {
    hue: DataTypes.INTEGER,
    saturation: DataTypes.INTEGER,
    value: DataTypes.INTEGER
});
