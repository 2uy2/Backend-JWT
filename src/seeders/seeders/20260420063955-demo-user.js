// 20260420063955-demo-user.js

export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User', [{
      email: 'test@gmail.com',
      password: '123',
      username: 'test',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
  }
};