module.exports = (sequelize, DataTypes) => {

const Odds = sequelize.define("Odds", {
    team1: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    team2: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    selections: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    result: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    bet_amount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
            len: [1]
        }
    },
    new_amount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
            len: [1]
        }
    },
});

return Odds;
}
