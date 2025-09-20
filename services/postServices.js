import { Post } from "../models/postModel.js"



export const addPostService= async(postDetails)=>{

    try {
        
        const post =new Post(postDetails)
        await post.save()

        return{ success:true,post}
    } catch (error) {

        return {success:false,error:error.message}
        
    }
}

export const getAllPostService =async()=>{
    try {
          const allPost= await Post.find()
          return{success:true,allPost}

    } catch (error) {
        return{success:false,error:error.message}
        
    }
}

export const updatePostService=async(id,updateData)=>{

    try {
        const posts=await Post.findById(id)

        if(!posts){
            return{success:false,data:null,message:"post not found"}
        }


      Object.keys(updateData).forEach((key) => {
      posts[key] = updateData[key];
        });   
    
       const updatedPost= await posts.save()
        return{success:true, updatedPost}

        
    } catch (error) {

        return{success:false,error:error.message}
        
    }
}

export const deletePostService=async(id)=>{
    try {
        const post= await Post.findById(id)
        if(!post)
        {
            return {success:false,message:"post Not found"}
        }
        await Post.findByIdAndDelete(id)
        
        return{success:true,Post}
        
    } catch (error) {
        return{success:false, error:error.message}
    }
}