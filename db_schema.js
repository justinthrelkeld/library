var sequelize, Sequelize, Item;

Item = sequelize.define('items', {
      Name: {
        type: Sequelize.STRING
      },
      Image: {
        type: Sequelize.STRING
      },
      Author: {
        type: Sequelize.STRING
      },
      Tags: {
        type: Sequelize.STRING
      },
      Type: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.TEXT
      }, 
      ID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1
      }
    });