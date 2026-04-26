import {
    Sequelize
} from 'sequelize';
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize('jwt', 'root', process.env.PASSWORDDATABASE, {
    host: 'localhost',
    dialect: 'mysql'
});

// export instance
export default sequelize;

// export thêm hàm connect nếu cần
export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};