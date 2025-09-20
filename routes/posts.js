import { Router } from "express"
import { addPosts, deletePosts, getAllPosts, updatePosts } from "../controllers/postController.js"



const router=Router()

router.route('/getPosts').get(getAllPosts)
router.route('/addPosts').post(addPosts)
router.route('/post/:id').patch(updatePosts)
router.route('/delposts/:postId').delete(deletePosts)


export default router