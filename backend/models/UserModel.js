// this data filed with structure table, how data saving in database
import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

// table, field, opsi
const User = db.define('users', {
    name    : DataTypes.STRING,
    email   : DataTypes.STRING,
    gender  : DataTypes.STRING
}, {
    freezeTableName:true
});

export default User;

// generate table when table undifine in db
// this function doesn't have name, so it can run with call ()
(async()=>{
    await db.sync();
})();