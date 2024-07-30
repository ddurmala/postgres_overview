const { DataTypes, Model } = require('sequelize');
const client = require('../db/connection');

class Course extends Model { }

Course.init(
    {
        course_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        course_type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize: client,
        modelName: 'course'
    }
);

module.exports = Course;