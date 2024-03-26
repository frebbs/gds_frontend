import express from "express";
const router = express.Router();

import {rootController_GET} from "../../controller/root/rootController.js";

router.get("/", rootController_GET.home);

router.get("/contact", rootController_GET.contact);

router.get("/about", rootController_GET.about);

export default router;