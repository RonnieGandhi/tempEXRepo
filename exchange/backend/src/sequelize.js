import Sequelize, { Op } from 'sequelize';
import config from './config';

const sequelize = new Sequelize(config.databaseUrl, {
  operatorsAliases: Op,
  logging: config.sequelizeLogging,
  define: {
    freezeTableName: true,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection with NYDAX DB has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;
