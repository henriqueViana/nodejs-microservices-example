import Sequelize from 'sequelize'
import dbConfig from './config/config'

const connection = new Sequelize(dbConfig)

connection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default connection 