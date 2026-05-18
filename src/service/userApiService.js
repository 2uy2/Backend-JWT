import db from '../models/index.js'
import User from '../models/User.js';

const getAllUser = async () => {

    try {
        let users = await db.User.findAll({
            attributes: ['id', 'username', 'email', 'phone', 'sex'], //attribute == select colm
            raw: true,
            include: { //include = join
                model: db.Group,
                attributes: ['name', 'description'],
            },
            nest: true
        });
        if (users) {


            return {
                EM: "get success",
                EC: 0,
                DT: users,
            }
        } else {
            return {
                EM: "get fail",
                EC: -1,
                DT: [],
            }
        }

    } catch (error) {
        return {
            EM: "wrong from service",
            EC: -1,
            DT: [],
        }
    }
}
const getUserWithPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit; //tính phần bỏ qua(offset)
        const {
            count,
            rows
        } = await User.findAndCountAll({ // count trả về số lượng, rows trả ra data
            offset: offset,
            limit: limit
        })
        let totalPages = Math.ceil(count / limit)
        let data = {
            totalRows: count,
            totalPages: totalPages,
            users: rows

        };

        console.log("check data", data)

        return {
            EM: "oke",
            EC: 0,
            DT: data,
        }
    } catch (error) {
        return {
            EM: "some thing wrong from service",
            EC: -1,
            DT: [],
        }
    }
}
const createNewUser = async () => {
    try {
        await db.User.create({

        })
    } catch (error) {
        return {
            EM: "wrong from service",
            EC: -1,
            DT: [],
        }
    }
}
const updateUser = async (data) => {
    try {
        let user = db.User.findOne({
            where: {
                id: data.id
            }
        })
        if (user) {
            user.save()
        } else {}
    } catch (error) {
        return {
            EM: "wrong from service",
            EC: -1,
            DT: [],
        }
    }
}

const deleteUser = async (id) => {
    try {
        await db.User.delete({
            where: {
                id: id
            }
        })
    } catch (error) {
        return {
            EM: "wrong from service",
            EC: -1,
            DT: [],
        }
    }
}

export default {
    getAllUser,
    updateUser,
    createNewUser,
    deleteUser,
    getUserWithPagination
}