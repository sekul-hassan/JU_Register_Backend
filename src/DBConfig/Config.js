const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ju_register', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true,
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Database connected successfully!');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;  // Ensure you're exporting the sequelize instance correctly
