const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const User = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: Sequelize.STRING,
    record: Sequelize.INTEGER,
});

module.exports = User;