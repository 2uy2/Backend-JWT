import userApiService from "../service/userApiService.js"
const readFunc = async (req, res) => {

    try {
        if (req.query.page && req.query.limit) {
            let page = req.query.page;
            let limit = req.query.limit;
            console.log("check data ", page, limit)
            let data = await userApiService.getUserWithPagination(+page, +limit)
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT
            })
        } else {
            let data = await userApiService.getAllUser(req, res)
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT
            })
        }



    } catch (error) {
        return res.status(500).json({
            EM: "error form server",
            EC: -1,
            DT: ""
        })

    }

}
const createFunc = (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json({
            EM: "error form server",
            EC: -1,
            DT: ""
        })
    }
}
const updateFunc = (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json({
            EM: "error form server",
            EC: -1,
            DT: ""
        })
    }
}
const deleteFunc = (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json({
            EM: "error form server",
            EC: -1,
            DT: ""
        })
    }
}
export default {
    readFunc,
    createFunc,
    updateFunc,
    deleteFunc
}