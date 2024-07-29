import express from "express";

import appscontroller from '../controllers/apps-controller.js'

const router = express.Router()

router.get("/",appscontroller.appApps)
router.get("/search",appscontroller.searchapp)

export default router