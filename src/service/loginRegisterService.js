import db from '../models/index.js';
import {
    Op
} from "sequelize"
import bcrypt, {
    hashSync
} from "bcryptjs";
const salt = bcrypt.genSaltSync(10);

const hashPassword = (userPassword, salt) => {
    {
        let hashPassword = bcrypt.hashSync(userPassword, salt);
        return hashPassword
    }
}
const checkEmail = async (userEmail) => {
    let user = await db.User.findOne({
        where: {
            email: userEmail
        }
    })
    if (user) {
        return true;
    } else {
        return false
    }
};
const checkPhone = async (userPhone) => {
    let user = await db.User.findOne({
        where: {
            phone: userPhone
        }
    })
    if (user) {
        return true;
    } else {
        return false
    }
}
const registerNewUser = async (rawUserData) => {
    try {
        let isEmailExist = await checkEmail(rawUserData.email);

        if (isEmailExist === true) {
            return {
                EM: "The email is already exist",
                EC: 1
            }
        }
        let isPhoneExist = await checkPhone(rawUserData.phone)
        if (isPhoneExist === true) {
            return {
                EM: "The phone number is already exist",
                EC: 1
            }
        }
        //hash user password
        let userPassword = hashPassword(rawUserData.password, salt);

        //create new user
        await db.User.create({
            email: rawUserData.email,
            phone: rawUserData.phone,
            username: rawUserData.userName,
            password: userPassword,

        })
        return {
            EM: "a user is created successfully",
            EC: 0

        }
    } catch (e) {
        return {

            EM: "something wrong in service",
            EC: -2
        }
    }
    //check email / phoneNumber are exist 

}
const checkPassword = (inputPassword, hashPassword) => {
    return bcrypt.compareSync(inputPassword, hashPassword) //true or false

}
const handleLogin = async (rawData) => {
    try {

        let user = await db.User.findOne({
            where: {
                [Op.or]: [{
                        email: rawData.valueLogin
                    },
                    {
                        phone: rawData.valueLogin
                    }
                ]
            }
        })


        if (user) {
            let isCorrectPassword = checkPassword(rawData.password, user.password);
            if (isCorrectPassword === true)
                return {
                    EM: "ok",
                    EC: "",
                    EC: ""
                }

        } else {
            return {

                EM: "your email /phone number or password incorrect",
                EC: -2,
                DT: ""
            }
        }

    } catch (error) {
        return {

            EM: "something wrong in service",
            EC: -2,
            DT: ""
        }
    }
}

export default {
    registerNewUser,
    handleLogin
}