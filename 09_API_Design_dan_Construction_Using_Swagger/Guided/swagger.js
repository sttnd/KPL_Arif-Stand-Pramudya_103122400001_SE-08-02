const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Film yang Ditonton',
      version: '1.0.0',
      description: 'Sebuah API sederhana tentang film yang telah ditonton',
    },
  },
  apis: ['app.js'],
};

const specs = swaggerJsdoc(options);

module.exports = {
  specs,
  swaggerUi,
};