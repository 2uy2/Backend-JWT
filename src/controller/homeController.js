import userService from "../service/userService.js";


const handleHelloWorld = (req, res) => {
    const name = "quy"
    return res.render("home.ejs", {
        name
    })
};

const handleUserPage = async (req, res) => {
    //modal => get data from database
    let userList = await userService.getUserList();

    return res.render("user.ejs", {
        userList
    })
}
const handleCreateNewUser = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    await userService.createNewUser(email, password, username)

    res.redirect("/user");
}
const handleDeleteUser = async (req, res) => {
    const id = req.params.id;
    await userService.deleteUser(id);
    res.redirect("/user")
}

const getUpdateUserPage = async (req, res) => {
    const id = req.params.id;
    const user = await userService.getUserById(id)
    let userData = {};
    userData = user;
    return res.render("user-update.ejs", {
        userData
    })


    // if (user && user.length > 0) {
    //     const userData = user[0];
    //     return res.render("user-update.ejs", {
    //         userData
    //     })
    // }

}
const handleUpdateUser = async (req, res) => {
    let email = req.body.email;
    let username = req.body.username;
    let id = req.body.id
    await userService.updateUserInfo(email, username, id)
    return res.redirect("/user")
}
export default {
    handleHelloWorld,
    handleUserPage,
    handleCreateNewUser,
    handleDeleteUser,
    getUpdateUserPage,
    handleUpdateUser

};