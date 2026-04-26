import mysql from 'mysql2/promise';
import bcrypt from "bcryptjs";
import db from '../models/index.js';


const salt = bcrypt.genSaltSync(10);

//create the connection to the database
const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dasdas312',
    database: 'jwt'
});

const hashPassword = (userPassword, salt) => {
    {
        let hashPassword = bcrypt.hashSync(userPassword, salt);
        return hashPassword
    }
}
const createNewUser = async (email, password, username) => {
    let hashPass = hashPassword(password);
    await User.create({
        email: email,
        password: hashPass,
        username: username,
        createdAt: new Date(),
        updatedAt: new Date()
    });

}
const getUserList = async () => {
    //test relationship
    let newUser = await db.User.findOne({
        where: {
            id: 1
        },
        attributes: ['id', 'username', 'email'], //attribute == select colm
        raw: true,
        include: { //include = join
            model: db.Group,
            attributes: ['name', 'description'],
        },
        nest: true
    })


    let r = await db.Role.findAll({
        include: {
            model: db.Group,
            where: {
                id: 1
            }
        },
        raw: true,
        nest: true
    })
    console.log("newuser ", newUser)


    let users = [];
    users = await db.User.findAll();
    return users;

}
const deleteUser = async (userId) => {
    await User.destroy({ //destroy là câu lệnh xoá
        where: {
            id: userId
        }
    })

}
const getUserById = async (userId) => {
    let user = [];
    user = await User.findOne({
        where: {
            id: userId
        }
    })
    return user;

}

const updateUserInfo = async (email, username, id) => {
    await User.update({
            email: email,
            username: username
        }, {
            where: {
                id: id
            }
        }

    )

}
export default {
    createNewUser,
    getUserList,
    deleteUser,
    getUserById,
    updateUserInfo
}