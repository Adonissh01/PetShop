import express from "express";
import { getFeedPosts , getUsersPosts} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";
import { createPost } from "../controllers/posts.js" ;

const router = express.Router();

//READ
router.get("/",verifyToken,getFeedPosts);
router.post('/adoptionPost', createPost);


export default router;