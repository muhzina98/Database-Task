import { statusCodes } from "../helpers/postHelpers.js";
import { addPostService, deletePostService, getAllPostService, updatePostService } from "../services/postServices.js";


export const addPosts= async(req,res)=>{
    try {
        const {title,content} =req.body
        console.log(req.body);
        const response= await addPostService(req.body)
        console.log(response);
        
        if(!response.success){
             const status=statusCodes.find((item)=>item.code===500)
            return res.status(status.code).json({success:false,message:"Post creation is failed",error:response.error})
        }
         const status=statusCodes.find((item)=>item.code===201)
         res.status(status.code).json({succes:true,message:"post successfully created",data:response.post})
    
         
    } catch (error) {
        const status=statusCodes.find((item)=>item.code===500)
        res.status(status.code).json({succes:false,message:"something error"})
        
    }
}





export const getAllPosts=async(req,res)=>{
    try {
        
        const posts= await getAllPostService();
        if(!posts.success){
            const status=statusCodes.find((item=>item.code==500))
            return res.status(status.code).json({success:false,error:posts.error,message:`No posts found ${status.message}`})
        }
       if(!posts.allPost|| posts.allPost.length===0){
        {
       const status=statusCodes.find((item)=>item.code===404);
        return res.status(status.code).json({success:false,message:`No posts found:${status.message}`})
        }
    }
    const status=statusCodes.find((item)=>item.code===200);
    res.status(status.code).json({success:true,message:"Posts fetched successfully:",quantity:posts.allPost.length,data:posts.allPost})


}

    catch(error)
    {

        console.log(error);
        const status= statusCodes.find((item)=>item.code===500);
        res.status(status.code).json({success:false,message:`getAllPosts failed:${status.message}`})
    }
    
}



export const updatePosts=async(req,res)=>{
    try {
        const {id} =req.params;
        const updateData =req.body;
        const post =await updatePostService(id,updateData)
        if(!post.success){
            const status=statusCodes.find((item)=>item.code===404);
           return res.status(status.code).json({success:false,message:`post not found:,${status.message}`});

        }
        const status=statusCodes.find((item)=>item.code===200);
        res.status(status.code).json({success:true,message:"post update successfully",data:post.updatedPost})

    }
    catch(error){
        console.log(error); 
        const status=statusCodes.find((item)=>item.code===500)
        res.status(status.code).json({success:false,message:`${status.message}`})
    }
}


export const deletePosts=async(req,res)=>{
    try {
        const{postId}= req.params
        const post =await deletePostService(postId)
     if(!post.success){
            const status=statusCodes.find((item)=>item.code===404);
           return res.status(status.code).json({success:false,message:`post not found:${status.message}`});

        }
        const status=statusCodes.find((item)=>item.code===200);
        res.status(status.code).json({success:true,message:"post delete successfully",data:post})

    }
    catch(error){
        console.log(error); 
        const status=statusCodes.find((item)=>item.code===500)
        res.status(status.code).json({success:false,message:`${status.message}`})
    }
}