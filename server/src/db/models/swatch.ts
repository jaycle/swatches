import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface SwatchAttributes {
    id: number;
    hue: number,
    saturation: number,
    value: number
    createdAt?: Date;
    updatedAt?: Date;
}
export interface SwatchModel extends Model<SwatchAttributes>, SwatchAttributes {}
export class Swatch extends Model<SwatchModel, SwatchAttributes> {}

export type SwatchStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): SwatchModel;
};

export function swatchFactory (sequelize: Sequelize): SwatchStatic {
    return <SwatchStatic>sequelize.define("Swatch", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        hue: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        saturation: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        value: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    });
}
