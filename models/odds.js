module.exports = (sequelize, DataTypes) => {

var Odds = sequelize.define("Odds", {
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
Odds.associate = function(models) {
    Odds.belongsTo(models.User)
}
return Odds;
}

// const Odds = sequelize.define("Odds", {
//     team1: DataTypes.STRING,
//     team2: DataTypes.STRING,
//     selections: DataTypes.STRING,
//     result: DataTypes.STRING,
//     bet_amount: DataTypes.INTEGER,
//     new_amount: DataTypes.INTEGER
// });
// return Odds;
// };

