import { Router } from "express";
const router = Router();

//Input all controller
import * as controller from '../controllers/appController.js'

//** Post Methods */
// router.route('/register').post( (req, res) => res.json('register route is working') ); //register user
router.route('/register').post(controller.register ); //after import controllers
router.route('/registerMail').post() //send email
router.route('/authenticate').post((req,res)=>res.end()) //auth the user    
router.route('/login').post(controller.login) //login in app

//** Get Methods */
router.route('/user/:username').get(controller.getUser)
router.route('/generateOTP').get(controller.generateOTP)
router.route('/verifyOTP').get(controller.verifyOTP)
router.route('/createResetSession').get(controller.createResetSession)

//** Put Methods */
router.route('/uptadeUser').put(controller.uptadeUser)
router.route('/resetPwd').put(controller.resetPwd)


export default router;