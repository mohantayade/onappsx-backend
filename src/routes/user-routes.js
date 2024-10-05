import express from "express";
import userController from "../controllers/user-controller.js";
import hashPassword from "../middlewares/bcriptjs-hashpasword.js";
import verifyuser from '../middlewares/userverify.js'
import appscontroller from '../controllers/apps-controller.js'
import upload from '../middlewares/multer.js'

// test
import uploades from "../controllers/uploadtest.js";

// 
const router = express.Router()

router.post("/signup",hashPassword,userController.handleUserSignUp)
router.post("/login",userController.handleUserlogin)
router.get("/profile",verifyuser,userController.userProfile)
router.get("/profilepic",userController.userProfilePic)

router.post("/profile/upload",upload.single('profilePicture'), verifyuser,  userController.handleProfilePictureUpload);

router.post("/createapp",verifyuser,appscontroller.createApps)
router.get("/userapp",verifyuser,appscontroller.userApps)
router.delete("/userapp",verifyuser,appscontroller.appDelete)
router.patch("/userapp",verifyuser,appscontroller.appUpdate)

router.post('/uploadcloud',upload.single('file'),uploades)


// router.post("/upload",upload.single('avatar'),function (req, res) {
//     if (!req.file) {
//         return res.status(400).json({ message: 'No file uploaded' });
//       }
//       res.json({ message: 'File uploaded successfully', file: req.file });
//   })

router.get("/",userController.homePage)


export default router