 import loginRegisterService from "../service/loginRegisterService.js"
 const testApi = (req, res) => {
     return res.status(200).json({
         message: "oke",
         data: "test api"
     })
 }
 const handleRegister = async (req, res) => {
     try {

         if (!req.body.email || !req.body.phone || !req.body.userName || !req.body.password) {
             return res.status(200).json({
                 EM: 'Missing required paramaters', // error message
                 EC: 1, //error code
                 DT: "", //data
             })
         }
         //service : create user
         let data = await loginRegisterService.registerNewUser(req.body);
         return res.status(200).json({
             EM: data.EM, // error message
             EC: data.EC, //error code
             DT: "", //data
         })

     } catch (error) {
         return res.status(500).json({
             EM: 'error from server', // error message
             EC: -1, //error code
             DT: "", //data
         })
     }
 }
 const handleLogin = async (req, res) => {
     try {
        let data =await loginRegisterService.handleLogin(req.body);
        
         return res.status(200).json({
         EM:data.EM,
         EC:data.EC,
         DT:data.DT
     })
     } catch (error) {
        return res.status(500).json({
             EM: 'error from server', // error message
             EC: -1, //error code
             DT: "", //data
         })
     }
    
 }
 export default {
     testApi,
     handleRegister,
     handleLogin
 }