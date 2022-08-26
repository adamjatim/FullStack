import {Sequelize} from "sequelize";

// creat db with name crud_db, username: root, password: NULL
const db = new Sequelize('crud_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;